const fetch = require('node-fetch');

async function testDirectusConfig() {
  const graphqlEndpoint = 'https://forge.matrix-net.tech/graphql';
  const token = 'CCZnVSanwCwzS6edoC8-2ImbzJiZLeAD';

  console.log('🔍 测试 Directus GraphQL 配置...');

  // 1. 首先获取一个真实的 customer ID
  const customerQuery = `
    query GetFirstCustomer {
      customers(limit: 1) {
        id
        nick_name
        open_id
      }
    }
  `;

  try {
    const customerResponse = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ query: customerQuery })
    });

    const customerData = await customerResponse.json();
    console.log('✅ 获取到客户数据:', customerData.data?.customers?.[0]);

    if (!customerData.data?.customers?.[0]) {
      console.log('❌ 没有找到客户记录，无法测试');
      return;
    }

    const customerId = customerData.data.customers[0].id;

    // 2. 获取一个真实的 boutique ID
    const boutiqueQuery = `
      query GetFirstBoutique {
        boutiques(limit: 1) {
          id
          name
        }
      }
    `;

    const boutiqueResponse = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ query: boutiqueQuery })
    });

    const boutiqueData = await boutiqueResponse.json();
    console.log('✅ 获取到店铺数据:', boutiqueData.data?.boutiques?.[0]);

    if (!boutiqueData.data?.boutiques?.[0]) {
      console.log('❌ 没有找到店铺记录，无法测试');
      return;
    }

    const boutiqueId = boutiqueData.data.boutiques[0].id;

    // 3. 测试创建 visits 记录 - 方法1：使用简单ID
    console.log('\n🧪 测试方法1: 使用简单ID创建访问记录...');
    
    const visitMutationSimple = `
      mutation TestCreateVisitSimple($customerId: ID!, $boutiqueId: ID!) {
        create_visits_item(data: {
          customer: $customerId,
          boutique: $boutiqueId
        }) {
          id
          date_created
        }
      }
    `;

    const visitResponseSimple = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        query: visitMutationSimple,
        variables: {
          customerId: customerId,
          boutiqueId: boutiqueId
        }
      })
    });

    const visitDataSimple = await visitResponseSimple.json();
    
    if (visitDataSimple.errors) {
      console.log('❌ 方法1失败，错误信息:', visitDataSimple.errors);
      
      // 4. 测试创建 visits 记录 - 方法2：使用完整对象
      console.log('\n🧪 测试方法2: 使用完整对象创建访问记录...');
      
      const customer = customerData.data.customers[0];
      const boutique = boutiqueData.data.boutiques[0];
      
      const visitMutationComplex = `
        mutation TestCreateVisitComplex($customerData: create_customers_input!, $boutiqueData: create_boutiques_input!) {
          create_visits_item(data: {
            customer: $customerData,
            boutique: $boutiqueData
          }) {
            id
            date_created
          }
        }
      `;

      const visitResponseComplex = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          query: visitMutationComplex,
          variables: {
            customerData: {
              id: customer.id,
              open_id: customer.open_id,
              nick_name: customer.nick_name
            },
            boutiqueData: {
              id: boutique.id,
              name: boutique.name
            }
          }
        })
      });

      const visitDataComplex = await visitResponseComplex.json();
      
      if (visitDataComplex.errors) {
        console.log('❌ 方法2也失败，错误信息:', visitDataComplex.errors);
        console.log('\n📋 诊断结果:');
        console.log('- Directus 配置可能需要进一步调整');
        console.log('- 字段类型仍然要求完整对象而不是简单ID');
        console.log('- 可能需要使用自定义 resolver 方案');
      } else {
        console.log('✅ 方法2成功! 创建的访问记录:', visitDataComplex.data);
        console.log('\n📋 诊断结果:');
        console.log('- Directus 需要完整对象来创建关系');
        console.log('- 我们需要在前端传递完整的客户和店铺信息');
      }
    } else {
      console.log('🎉 方法1成功! 创建的访问记录:', visitDataSimple.data);
      console.log('\n📋 诊断结果:');
      console.log('- Directus 配置正确，接受简单ID');
      console.log('- 可以直接激活前端代码');
    }

  } catch (error) {
    console.error('❌ 测试过程中出现错误:', error.message);
  }
}

testDirectusConfig();
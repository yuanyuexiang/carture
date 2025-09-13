const { GraphQLClient } = require('graphql-request');

// 测试 WeChat 访问记录创建功能
async function testVisitCreation() {
  console.log('🧪 测试 WeChat 访问记录创建...\n');
  
  const client = new GraphQLClient('http://localhost:8055/graphql', {
    headers: {
      'Authorization': 'Bearer YOUR_ADMIN_TOKEN_HERE', // 需要替换为实际的管理员令牌
    },
  });

  // 模拟 WeChat 用户数据
  const mockWechatUser = {
    openid: `test_openid_${Date.now()}`,
    unionid: `test_unionid_${Date.now()}`,
    nickname: '测试用户',
    headimgurl: 'https://example.com/avatar.jpg',
    sex: 1
  };

  const boutiqueId = '1'; // 使用现有的店铺ID

  try {
    console.log('1. 测试获取店铺信息...');
    const getBoutique = `
      query GetBoutique($id: GraphQLStringOrFloat!) {
        boutiques_by_id(id: $id) {
          id
          name
          auth_config
        }
      }
    `;

    const boutiqueResult = await client.request(getBoutique, { id: boutiqueId });
    const boutique = boutiqueResult.boutiques_by_id;
    
    if (!boutique) {
      throw new Error('店铺不存在，请先创建店铺或使用正确的店铺ID');
    }
    
    console.log('✅ 店铺信息:', boutique);

    console.log('\n2. 测试创建客户记录...');
    const createCustomer = `
      mutation CreateCustomer($open_id: String!, $nick_name: String!, $avatar: String, $sex: String, $boutiqueId: GraphQLStringOrFloat!) {
        create_customers_item(data: {
          open_id: $open_id
          nick_name: $nick_name
          avatar: $avatar
          sex: $sex
          boutique: {
            id: $boutiqueId
          }
        }) {
          id
          open_id
          nick_name
          avatar
          sex
          boutique {
            id
            name
            auth_config
          }
          created_time
        }
      }
    `;

    const customerResult = await client.request(createCustomer, {
      open_id: mockWechatUser.openid,
      nick_name: mockWechatUser.nickname,
      avatar: mockWechatUser.headimgurl,
      sex: mockWechatUser.sex.toString(),
      boutiqueId: boutiqueId
    });

    const customer = customerResult.create_customers_item;
    console.log('✅ 客户记录创建成功:', customer);

    console.log('\n3. 测试创建访问记录...');
    const createVisit = `
      mutation CreateVisitWithFullData($customer: create_customers_input!, $boutique: create_boutiques_input!) {
        create_visits_item(data: {
          customer: $customer
          boutique: $boutique
        }) {
          id
          date_created
          customer {
            id
            nick_name
            boutique {
              id
              name
            }
          }
          boutique {
            id
            name
          }
        }
      }
    `;

    const visitResult = await client.request(createVisit, {
      customer: {
        id: customer.id,
        open_id: customer.open_id,
        nick_name: customer.nick_name,
        avatar: customer.avatar,
        sex: customer.sex,
        created_time: customer.created_time,
        boutique: {
          id: customer.boutique.id,
          name: customer.boutique.name,
          auth_config: customer.boutique.auth_config
        }
      },
      boutique: {
        id: boutique.id,
        name: boutique.name,
        auth_config: boutique.auth_config
      }
    });

    const visit = visitResult.create_visits_item;
    console.log('✅ 访问记录创建成功:', visit);

    console.log('\n🎉 所有测试通过！WeChat 访问记录功能正常工作。');
    console.log('\n📊 测试结果总结:');
    console.log(`- 客户ID: ${customer.id}`);
    console.log(`- 访问记录ID: ${visit.id}`);
    console.log(`- 店铺: ${visit.boutique.name}`);
    console.log(`- 访问时间: ${visit.date_created}`);

  } catch (error) {
    console.error('❌ 测试失败:', error.message);
    if (error.response) {
      console.error('GraphQL 错误详情:', JSON.stringify(error.response.errors, null, 2));
    }
  }
}

// 运行测试
if (require.main === module) {
  testVisitCreation();
}

module.exports = { testVisitCreation };
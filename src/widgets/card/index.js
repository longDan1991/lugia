import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import CARD from '@lugia/lugia-web/dist/card/lugia.card.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const BaseCard =  require('./BaseCard').default;  const ShadowCard =  require('./ShadowCard').default;  const TypeCard =  require('./TypeCard').default;  const ComboCard =  require('./ComboCard').default;  const TabsCard =  require('./TabsCard').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                            <Title title={'卡片'} subTitle={'Card'} desc={'卡片容器，可添加文字、列表、图片等'} />
                            <Demo title={'卡片基本用法'} titleID={'card-0'} code={<code>{ 'import React from \'react\';\nimport { Card, Theme } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  margin-top: 50px;\n  display: inline-block;\n`;\nexport default class BaseCard extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <Card\n          title={\'this is title\'}\n          description={\'this is description\'}\n          shadow={\'always\'}\n          operation={\'操作\'}\n        />\n      </Wrapper>\n    );\n  }\n}\n'}</code>} desc={'可以添加标题,内容,操作等...'}  demo={<BaseCard />}></Demo><Demo title={'卡片阴影'} titleID={'card-1'} code={<code>{ 'import React from \'react\';\nimport { Card, Theme } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  margin-top: 50px;\n  display: inline-block;\n`;\nexport default class ShadowCard extends React.Component<any, any> {\n  render() {\n    return (\n      <Wrapper>\n        <Card\n          title={\'this is title\'}\n          description={\'this is description\'}\n          shadow={\'always\'}\n          operation={\'操作\'}\n        />\n        <Card\n          title={\'this is title\'}\n          description={\'this is description\'}\n          shadow={\'hover\'}\n          operation={\'操作\'}\n        />\n        <Card\n          title={\'this is title\'}\n          description={\'this is description\'}\n          shadow={\'never\'}\n          operation={\'操作\'}\n        />\n      </Wrapper>\n    );\n  }\n}\n'}</code>} desc={'可以选着一直显示,和 hover 显示'}  demo={<ShadowCard />}></Demo><Demo title={'卡片风格'} titleID={'card-2'} code={<code>{ 'import React from \'react\';\nimport { Card, Theme } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\n\nconst Wrapper = styled.div`\n  margin-top: 50px;\n  display: inline-block;\n`;\nexport default class TypeCard extends React.Component<any, any> {\n  render() {\n    const view = {\n      [Widget.Card]: {\n        width: 300,\n        height: 200\n      }\n    };\n    const avatar = {\n      [Widget.Avatar]: {\n        width: 80,\n        height: 80\n      }\n    };\n    const cardImage = {\n      [Widget.CardImage]: {\n        width: 200,\n        height: 130\n      }\n    };\n    return (\n      <Wrapper>\n        <Theme config={view}>\n          <Card\n            title={<div>{\'this is title\'}</div>}\n            description={[\n              <div>{\'this is description\'}</div>,\n              <div>{\'this is description\'}</div>,\n              <div>{\'this is description\'}</div>,\n              <div>{\'this is description\'}</div>\n            ]}\n            shadow={\'always\'}\n          />\n        </Theme>\n        <Theme config={avatar}>\n          <Wrapper>\n            <Card\n              type={\'avatar\'}\n              title={\'this is title\'}\n              description={\'this is description\'}\n              avatar={\n                \'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7878a9471d38534398c28f73f27adb1b/738b4710b912c8fc8e9cace6f1039245d68821a9.jpg\'\n              }\n              shadow={\'hover\'}\n            />\n          </Wrapper>\n        </Theme>\n        <Theme config={avatar}>\n          <Wrapper>\n            <Card\n              type={\'avatar\'}\n              title={\'this is title\'}\n              description={\'this is description\'}\n              imageOrientation={\'vertical\'}\n              avatar={\n                \'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7878a9471d38534398c28f73f27adb1b/738b4710b912c8fc8e9cace6f1039245d68821a9.jpg\'\n              }\n              shadow={\'hover\'}\n            />\n          </Wrapper>\n        </Theme>\n        <Wrapper>\n          <Card\n            type={\'image\'}\n            title={\'this is title\'}\n            imageOrientation={\'horizontal\'}\n            description={\'this is description\'}\n            image={\n              \'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4f88e0c6b3de9c82b268f1dd0de8eb6f/f9198618367adab4973d1fbc8bd4b31c8601e464.jpg\'\n            }\n            shadow={\'hover\'}\n          />\n        </Wrapper>\n        <Theme config={cardImage}>\n          <Card\n            viewClass={\'cardImage\'}\n            type={\'image\'}\n            imageOrientation={\'vertical\'}\n            title={\'this is title\'}\n            description={\'this is description\'}\n            image={\n              \'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4f88e0c6b3de9c82b268f1dd0de8eb6f/f9198618367adab4973d1fbc8bd4b31c8601e464.jpg\'\n            }\n            shadow={\'hover\'}\n          />\n        </Theme>\n      </Wrapper>\n    );\n  }\n}\n'}</code>} desc={'可以添加图片,头像等 可以是水平风格,也可以是垂直风格'}  demo={<TypeCard />}></Demo><Demo title={'卡片组合用法'} titleID={'card-3'} code={<code>{ 'import React from \'react\';\nimport styled from \'styled-components\';\nimport { Card, Theme } from \'@lugia/lugia-web\';\n\nconst CardContainer = styled.div`\n  text-align: center;\n  width: 100%;\n  height: 100%;\n`;\nconst Price = styled.div`\n  text-align: center;\n  font-size: 16px;\n  color: #666;\n  margin-bottom: 26px;\n  width: 100%;\n`;\nconst PriceNum = styled.div`\n  text-align: center;\n  color: #4d63ff;\n  display: inline-block;\n`;\nconst Buy = styled.button`\n  position: absolute;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 20px;\n  margin-top: 32px;\n  color: #fff;\n  bottom: 10%;\n  width: 80%;\n  background-color: #4d63ff;\n  height: 32px;\n  border: 2px solid #4d63ff;\n  left: 10%;\n`;\nclass AmountCard extends React.Component<Object, Object> {\n  render() {\n    const price = \'9.88\';\n    let int = 0;\n    let decimals = 0;\n    if (price.indexOf(\'.\') > 0) {\n      int = price.substring(0, price.indexOf(\'.\'));\n      decimals = price.substring(price.indexOf(\'.\'));\n    }\n    return (\n      <CardContainer>\n        <Price>{\'价格\'}</Price>\n        <PriceNum>\n          <PriceNum style={{ fontSize: 32 }}>{int}</PriceNum>\n          <PriceNum style={{ fontSize: 18 }}>{decimals}</PriceNum>\n        </PriceNum>\n        <Buy>{\'购买\'}</Buy>\n      </CardContainer>\n    );\n  }\n}\n\nexport default class ComboCard extends React.Component<Object, Object> {\n  render() {\n    const combo = {\n      vertical: {\n        width: 200,\n        height: 220\n      }\n    };\n    return (\n      <Theme config={combo}>\n        <Card\n          viewClass={\'vertical\'}\n          type={\'combo\'}\n          content={<AmountCard />}\n          shadow={\'hover\'}\n        />\n      </Theme>\n    );\n  }\n}\n'}</code>} desc={'可以添加其他组件放在卡片内部'}  demo={<ComboCard />}></Demo><Demo title={'卡片组合用法'} titleID={'card-4'} code={<code>{ 'import React from \'react\';\nimport { Card, Theme, Tabs } from \'@lugia/lugia-web\';\nimport styled from \'styled-components\';\n\nconst Wrapper = styled.div`\n  margin-top: 50px;\n  display: inline-blocTk;\n`;\n\nexport default class TabsCard extends React.Component<Object, Object> {\n  render() {\n    const combo = {\n      register: {\n        width: 500,\n        height: 300\n      }\n    };\n    const defaultData = [\n      {\n        title: \'Tab1\',\n        content: \'content of Tab1\'\n      },\n      {\n        title: \'Tab2\',\n        content: \'content of Tab2\'\n      },\n      {\n        title: \'Tab3\',\n        content: \'content of Tab3\'\n      },\n      {\n        title: \'Tab4\',\n        content: \'content of Tab4\'\n      },\n      {\n        title: \'Tab5\',\n        content: \'content of Tab5\'\n      }\n    ];\n    return (\n      <Theme config={combo}>\n        <Wrapper>\n          <Card\n            operation={\'操作\'}\n            viewClass={\'register\'}\n            type={\'combo\'}\n            content={<Tabs data={defaultData} />}\n            shadow={\'hover\'}\n          />\n        </Wrapper>\n      </Theme>\n    );\n  }\n}\n'}</code>} desc={'可以添加其他组件放在卡片内部'}  demo={<TabsCard />}></Demo>
                            <EditTables dataSource={CARD} />
                            <FooterNav prev={prev} next={next} />
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'卡片基本用法'} href={'#card-0'} /><Link title={'卡片阴影'} href={'#card-1'} /><Link title={'卡片风格'} href={'#card-2'} /><Link title={'卡片组合用法'} href={'#card-3'} /><Link title={'卡片组合用法'} href={'#card-4'} />
                            </Anchor>
                        </Col>
                    </Row>
                );
            }
         });   
        

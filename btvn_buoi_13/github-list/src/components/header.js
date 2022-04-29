import { Layout, Image, Input, Row, Col } from 'antd';
import logo from '../logo.svg';

const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = (props) => {
    return (

        <Header>
            <Row>
                <Col span={16}>
                    <Image
                        width={80}
                        src={logo}
                    />
                </Col>
                <Col span={8}>
                    <Search 
                    placeholder="Tim kiem" 
                    enterButton
                    onSearch={props.filterNews}
                    style={{ marginTop: 15, width: 250 }} />
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent;
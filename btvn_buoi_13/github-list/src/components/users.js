import { List, Avatar } from 'antd';

const Users = (props) => {
    const news = props.users;
    return (
        <List
            itemLayout="horizontal"
            dataSource={news}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar_url} />}
                        title={<a href="https://ant.design">{item.login}</a>}
                        description={item.html_url}
                    />
                </List.Item>
            )}
        />
    )
}

export default Users;
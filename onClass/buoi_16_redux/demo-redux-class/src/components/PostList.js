import {Component} from "react";
import { connect } from 'react-redux';
import { fetchPosts} from "../actions";
import { fetchUsers } from "../actions/getUsers";

class PostList extends Component {
    componentDidMount() {
        // call API fetchPost
        // this.props.fetchPosts();
        
    }

    render() {
        const { users } = this.props;
        console.log('posts-in-component', users);
        return (
            <>
                <h2>Hiển thị danh sách các bài post lấy từ store ở đây: </h2>
                <button onClick={this.props.fetchUsers}>Show</button>

                {users.length > 0 && (
                    <div>
                    {users.map((user, index) => {
                        return (
                            <div key={index}>
                                <h2>ID: {user.id}</h2>
                                <h2>Name: {user.name}</h2>
                                <br />
                            </div>
                        )
                    })}
                </div>
                )}
            </>
        )
    }
}


// mapStateToProps -> Lấy dữ liệu từ store trả về cho components dưới dạng props của component
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(PostList);

// Flow run of Redux
// 1. Run vào index.js => khởi tạo store
// 2. Trong store gọi đến reducer
// 3. Reducer được kích hoạt bởi Actions (dispatch)
// 4. Action được kích hoạt trong component bởi mapDispatchToProps
// 5. store trong data được lấy ra trong component được kích hoạt bởi hàm mapStateToProps
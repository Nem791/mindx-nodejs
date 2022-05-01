import React, { useEffect, useState } from 'react';

const FormReact = () => {
    // const [name, setName] = useState('Nem');
    // const [email, setEmail] = useState('Nem@gmail.com');
    // const [age, setAge] = useState('22');
    const [members, setMembers] = useState([]);
    const [memberInfo, setMemberInfo] = useState({
        name: '',
        email: '',
        age: ''
    });

    // const handleName = (e) => {
    //     console.log('name-changed', e.target.value);
    //     setName(e.target.value);
    // }

    // const handleEmail = (e) => {
    //     console.log('name-changed', e.target.value);
    //     setEmail(e.target.value);
    // }

    // const handleAge = (e) => {
    //     console.log('name-changed', e.target.value);
    //     setAge(e.target.value);
    // }

    const handleInputData = (e) => {
        const nameField = e.target.name;
        const valueField = e.target.value;

        setMemberInfo({...memberInfo, [nameField]: valueField});
        console.log(`Field dang go ${nameField} - gia tri: ${valueField}`);
    }

    const handleAddNewMember = (e) => {
        e.preventDefault();
        // if (name && email && age) {
        //     const newMember = {
        //         name: name,
        //         email: email,
        //         age: age
        //     }
        //     setMembers([...members, newMember]);
        // } else {
        //     alert('Empty');
        // }
        if (memberInfo.name && memberInfo.email && memberInfo.age) {
            setMembers([...members, memberInfo]);
            setMemberInfo({name: '', email: '', age: ''});
        }
    }

    return (
        <>
            <article>
                <form onSubmit={handleAddNewMember}>
                    <div>
                        <label htmlFor={'name'}>Name:</label>
                        <input
                            name={'name'}
                            type={'text'}
                            value={memberInfo.name}
                            onChange={handleInputData} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>Email:</label>
                        <input
                            name={'email'} 
                            type={'email'} 
                            value={memberInfo.email} 
                            onChange={handleInputData} />
                    </div>
                    <div>
                        <label htmlFor={'age'}>Age:</label>
                        <input
                            name={'age'}  type={'number'} value={memberInfo.age} onChange={handleInputData} />
                    </div>
                    <button type={'submit'}>Add member</button>
                </form>

                <div>
                    {members.map((member, index) => {
                        return (
                            <div key={index}>
                                <h4>{member.name}</h4>
                                <h4>{member.email}</h4>
                                <h4>{member.age}</h4>
                            </div>
                        )
                    })}
                </div>
            </article>
        </>
    )
}

export default FormReact;
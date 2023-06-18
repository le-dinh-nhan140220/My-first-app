import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name, email, age);
  };
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label>
        Tên:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Tuổi:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label for="country">Quốc Gia:</label>
    <select id="country" name="country">
        <option value="vn">Việt Nam</option>
        <option value="us">Mỹ</option>
        <option value="jp">Nhật Bản</option>
    </select>
    <br/>
    <label for="isMarried">Đã có gia đình chưa?:</label>
    <input type="checkbox" id="isMarried" name="isMarried"/>
    <br/>
    <label for="birthdate">Ngày sinh:</label>
    <input type="date" id="birthdate" name="birthdate"/><br/>
    <label for="gender">Giới tính:</label>
    <input type="radio" id="gender-male" name="gender" value="male"/>
    <label for="female">Nam</label>
    <input type="radio" id="female-female" name="female" value="female"/>
    <label for="female">Nữ</label>
    <input type="radio" id="female-female" name="female" value="female"/>
    <label for="female">Giới tính 3</label><br/>

    <label for="note">Ghi chú thêm:</label>
    <textarea id="note" name="note" rows="4" cols="30"></textarea><br/>

    <label for="cancuoc">Ảnh chụp căn cước công dân:</label>
    <input type="file" id="cancuoc" name="cancuoc"/><br></br>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form;

 
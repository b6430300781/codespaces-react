import './hello.css';
const Hello =({name="Harry",age=22,salary=3000})=> {
    return (<>
    <h1>Hello {name} {age} {salary}!</h1><br/>
    </>);
}
export default Hello; 
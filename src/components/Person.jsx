
const Person = ({name,age}) => {
    return (
        <div>
            Hi I am {name} my age  {age}
            {
                age > 18 ?
                <p>I am married</p>
                :
                <p>I am Studying NOW</p>
            }
        </div>
    );
};

export default Person;
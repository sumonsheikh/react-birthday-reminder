import React, {useState} from 'react'


const List = ({people}) => {
    return (
        
        <div>
        
         { people && people.length > 0 ? people.map((person) =>{
             console.log(person.name);
            return(
                <article>
                    <img src={person.image} alt={person.name}/>
                    <div>
                        <h4>{person.name}</h4>
                        <p> {person.age } years</p>
                    </div>
                </article>
            );
         }): "Loading..."}
        </div>
    );
};
export default List;
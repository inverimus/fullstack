const Person = ({person}) => (
  <tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
  </tr>
)

const Persons = ({persons, filter}) => (
  <table>
    <tbody>
      {persons
        .filter(person => 
          person.name.toLowerCase().includes(filter.toLowerCase()))
        .map((person) => 
          <Person key={person.name} person={person} />)
      }
    </tbody>
  </table>  
)

export default Persons
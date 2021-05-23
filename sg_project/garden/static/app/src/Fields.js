'use strict';

class Fields extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { error, fields, section } = this.props;
    if (error) {
      return (
        <div>Error: {error.message}</div>
      );
    } else {
      return (
        <div>
          {section === "main-content"
          ? <div className="field-list-main">
              <ul>
                {fields.map(field => (
                  <li key={field.pk}>
                    <FieldMain data={field} />
                  </li>
                ))}
              </ul>
            </div>
          : <div className="field-list-side">
              <ul>
                {fields.map(field => (
                  <li key={field.pk}>
                    <FieldSide data={field}/>
                  </li>
                ))}
              </ul>
            </div>
            }
        </div>
      );
    } 
  }
}

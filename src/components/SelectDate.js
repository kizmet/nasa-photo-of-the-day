import React, {useState,useEffect} from "react";
import { Form,Grid } from "semantic-ui-react";

const SelectDate = props => {
  const [date, setDate] = useState(props.date);

  useEffect(() => {
    setDate(props.date);
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setDate(value );
  };
  return (
    <Grid.Column >
    <Form 
      onSubmit={e => {
        e.preventDefault();
        props.setToggleDate(date);
        props.handleSubmit();
      }}
    >
      
        <Form.Input
          label="Select Date"
          type="date"
          min="2015-01-01" max="2019-07-15"
          name="day"
          value={date}
          onChange={handleInputChange}
        />
        <Form.Button content="Submit" />
      
    </Form>
    </Grid.Column>
  );
};

export default SelectDate;

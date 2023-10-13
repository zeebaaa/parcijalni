import {useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";


function InputForm(props) {
    
    const [username, setUsername] = useState('');

    const {fetchData} = props;

    const handleSearchSumbit = async (e) => {
        e.preventDefault();
        await fetchData(username);
    }

    return(
            <form>
                <Form>
                    <Form.Label>GitHub username:</Form.Label>
                    <FormControl 
                        size="lg" 
                        placeholder="e.g.facebook"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        autoFocus/>
                   
                    <Button 
                        variant="secondary" 
                        type="submit"
                        onClick={e => handleSearchSumbit(e)}
                        size="lg" 
                        className="mt-5">GO!</Button>
                </Form>
          
            </form>
    )
}


export default InputForm;
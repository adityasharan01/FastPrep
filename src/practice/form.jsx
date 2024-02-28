import "./App.css"
export const formElements = [
    {
        label: 'Name',
        name: 'name',
        fieldType: 'input',
        type: 'text',
        placeholder: 'Enter your name',
    },
    {
        label: 'Lastname',
        name: 'Lastname',
        fieldType: 'input',
        type: 'text',
        placeholder: 'Enter your Lastname',
    },
    {
        label: 'Email',
        name: 'email',
        fieldType: 'input',
        type: 'email',
        placeholder: 'Enter your email',
    },
    {
        label: 'Country',
        name: 'country',
        fieldType: 'dropdown',
        multiple: false,
        options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'uk', label: 'United Kingdom' },
        ],
    },
    // Add more form elements as needed
];


const Form = ({ elements }) => {
    const renderFormElement = (element) => {
        switch (element.fieldType) {
            case 'input':
                return (
                    <label key={element.name}>
                        {element.label}:
                        <input
                            type={element.type}
                            name={element.name}
                            placeholder={element.placeholder}
                        />
                    </label>
                );
            case 'dropdown':
                return (
                    <label key={element.name}>
                        {element.label}:
                        <select name={element.name} multiple={element.multiple}>
                            {element.options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                );
            default:
                return null;
        }
    };

    return (
        <form>
            {elements.map(element => renderFormElement(element))}
            <button type="submit">Submit</button>
        </form>
    );
};

const App = () => {
    return (
        <div className="App">
            <Form elements={formElements} />
        </div>
    );
};

export default App;

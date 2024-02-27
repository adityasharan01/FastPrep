import { useEffect, useState } from "react";
import "./Autocomplete.css";

const Autocomplete = () => {
    const [inputValue, setInputValue] = useState("");
    const [companies, setCompanies] = useState([]);

    const fetchCompanies = async () => {
        try {
            const response = await fetch(
                `https://autocomplete.clearbit.com/v1/companies/suggest?query=${inputValue}`
            );
            if (response.status !== 200 || !response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();
            console.log(data);
            setCompanies(data);
        } catch (error) {
            console.log("NetWork error", error);
            // Reset Companies List
            setCompanies([]);
        }
    };

    useEffect(() => {
        // reset dropdown
        if (!inputValue.trim()) {
            setCompanies([]);
            return;
        }

        // fetchCompanies();
        clearTimeout(timer);
        let timer;

        function debounce(fn, delay) {
            return function (...args) {
                timer = setTimeout(() => {
                    console.log("II");
                    fn(args);
                }, delay);
            };
        }

        debounce(fetchCompanies, 2000)(inputValue);
        // debounce
        // const debounceID = setTimeout(async () => {
        //   try {
        //     const response = await fetch(
        //       `https://autocomplete.clearbit.com/v1/companies/suggest?query=${inputValue}`
        //     );

        //     if (response.status !== 200 || !response.ok) {
        //       throw new Error("Something went wrong!");
        //     }

        //     const data = await response.json();
        //     console.log(data);
        //     setCompanies(data);
        //   } catch (error) {
        //     console.log("NetWork error", error);
        //     // Reset Companies List
        //     setCompanies([]);
        //   }
        // }, 2000);

        // return () => clearTimeout(debounceID);
    }, [inputValue]);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {companies.length > 0 && (
                <ul>
                    {companies.map((company, index) => {
                        return (
                            <li key={index} onClick={() => handleSelect(company, id)}>
                                <div>
                                    <img src={company.logo} alt="logo" loading="lazy" />
                                    <span>{company.name}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Autocomplete;

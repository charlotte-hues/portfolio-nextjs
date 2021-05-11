import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Field = styled.div`
    width: 100%;
    height: ${props => props.textarea ? "12em" : "4em"};
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius: 4px;
    position: relative;
    background-color: transparent;
    transition: 0.3s all;
    margin: ${props => props.isValid && props.lostFocus ? "0 0 2em" : "1em 0 2em"};

    p {
        position: absolute;
        top: -2.5em;
    }

    label {
        position: absolute;
        top: 1.5em;
        left: 16px;
        color: #ffffff;
        opacity: 0;
        transition: 0.1s all ease-in-out;
        font-size: 1em;      
        }
    }

    input, textarea {
        width: 100%;
        height: 100%;
        position: relative;
        padding: 0px 1em;
        border: none;
        background-color: transparent;
        font-size: 1.25em;
        color: ${({theme}) => theme.colors.highlight};
        caret-color: ${({theme}) => theme.colors.primary};
        outline: none;
        box-shadow: 0px 4px 20px 0px transparent;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
        -webkit-appearance: none;

        &:-webkit-autofill {
            -webkit-text-fill-color: ${({theme}) => theme.colors.highlight};
            transition: background-color 5000s ease-in-out 0s;
        }

        &::placeholder {
            color: ${({theme}) => theme.colors.primary}99;
        }

        &::-moz-selection { background: ${({theme}) => theme.colors.primary};}
        &::selection { background: ${({theme}) => theme.colors.primary}; }
    }

    TextArea {
        padding: 8px 1em;
        resize: none;
    }

    &:focus-within { 
        label {
            top: 4px;
            opacity: 1;
            color: ${({theme}) => theme.colors.primary};
        }

        input, textarea {
            padding: 24px 1em 8px;

            ::placeholder {
            color: rgba(255,255,255,0);
            }
        }            
    } 
`;

const TextInput = ({id, fixed, value, changed, valid, errors}) => {
    const isTextArea = fixed.type === "text-area";
    const [lostFocus, setLostFocus] = useState(false);

    const blurHandler = () => setLostFocus(true);
    
    return (
        <Field textarea={isTextArea} isValid={valid} lostFocus={lostFocus}>
            <label htmlFor={id}>{fixed.placeholder}</label>
            {(!valid && lostFocus) && (<p>{"*" + errors.join(" and *")}</p>)}
            {isTextArea ? 
            <textarea
                id={id}
                type="text"
                value={value}
                placeholder={fixed.placeholder}
                onChange={changed}
                onBlur={blurHandler}
            />
            :
            <input
                id={id}
                type="text"
                value={value}
                placeholder={fixed.placeholder}
                onChange={changed}
                onBlur={blurHandler}
            />
            }
        </Field>
    )
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    locked: PropTypes.bool,
    focussed: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
 };

export default TextInput
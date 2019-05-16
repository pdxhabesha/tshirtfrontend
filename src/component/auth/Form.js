import React from "react";
import "./Form.css";

const Form = props => {
    return (
        <form className="form" onSubmit={props.handleSubmit}>
            <div loading={props.loading.toString()}>  </div>

            <div className={"input__group"}>
                <p className={"form__error"}>{props.error}</p>
            </div>
            {
                !props.signIn &&
                <div className={"input__group"}>
                    <input
                        type={props.email.type}
                        required={props.email.required}
                        className="text"
                        placeholder={props.email.placeholder}
                        name={props.email.name}
                        value={props.email.email}
                        onChange={props.handleChange}
                    />
                </div>
            }
            <div className={"input__group"}>
                <input
                    type={props.username.type}
                    required={props.username.required}
                    className="text"
                    placeholder={props.username.placeholder}
                    name={props.username.name}
                    value={props.username.username}
                    onChange={props.handleChange}
                />
            </div>
            <div className={"input__group"}>
                <input
                    type={props.password.type}
                    required={props.password.required}
                    placeholder={props.password.placeholder}
                    name={props.password.name}
                    value={props.password.password}
                    onChange={props.handleChange}
                />
            </div>
            {
                !props.signIn &&
                <>
                    <div className="strength-meter" >
                        <div className="strength-meter-fill" value={props.password.validation.strength}>{}</div>
                    </div>
                    <p id="password-strength-text">{props.password.error}</p>
                </>
            }
            {
                !props.signIn &&
                <div className={"input__group"}>
                    <input
                        type={props.password2.type}
                        required={props.password2.required}
                        className="password"
                        placeholder={props.password2.placeholder}
                        name={props.password2.name}
                        value={props.password2.password2}
                        onChange={props.handleChange}
                    />
                </div>
            }
            {!props.signIn && <p id="password2-error">{props.password2.error}</p>}
            {
                props.signIn &&
                <div className={"input__group"}>
                    <input
                        type={props.remember.type}
                        className="checkbox"
                        required={props.remember.required}
                        name={props.remember.name}
                        id={props.remember.id}
                        value={props.remember.remember}
                        onChange={props.handleChange}
                    />
                    <label htmlFor={"remember"}>
                        Remember
                    </label>
                </div>

            }
            <input
                type="submit"
                value={props.submit}
                disabled={!props.formValid}
            />
            {/*</div>*/}
        </form>
    )
};
export default Form;
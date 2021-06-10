import styled from "styled-components"

export const PageOne = (props) => (
  <>
    <h2>Please enter your details</h2>
    <label htmlFor="name">
      Name
    </label>
    <S.Input
      id="name"
      name="name"
      onChange={props.handleNameChange}
      type="text"
      required
    />
    <label htmlFor="email">
      Email address
    </label>
    <S.Input
      id="email"
      name="email"
      onChange={props.handleEmailChange}
      type="email"
      required
    />
    <div>
    <S.Button onClick={props.incrementPage}>Next</S.Button>
    </div>
  </>
);

export const PageTwo = (props) => (
  <>
    <h2>How do you identify?</h2>
    <label htmlFor="gender">
    </label>
    <S.GenderSelect
      id="gender"
      name="gender"
      onChange={props.handleGenderChange}
      aria-describedby="genderedRequirements"
      required
    >
      <option style={{color: "#12142e"}} value="woman">Woman</option>
      <option style={{color: "#12142e"}} value="man">Man</option>
      <option style={{color: "#12142e"}} value="nb">Non-binary / Other</option>
      <option style={{color: "#12142e"}} value="not_specified">Prefer not to say</option>
    </S.GenderSelect>
    <div>
    <S.Button onClick={props.decrementPage}>Previous</S.Button>
    <S.Button onClick={props.incrementPage}>Next</S.Button>
    </div>
  </>
);

export const PageThree = (props) => (
  <>
    <h2>Who would you like to connect with?</h2>
    (please tick all that apply)
    <div>
    <input
      type="checkbox"
      id="women"
      name="women"
      value="women"
      onChange={props.handleGenderPreference}
    />
    <label htmlFor="women">Women</label>
    </div>
    <div>
    <input
      type="checkbox"
      id="men"
      name="men"
      value="men"
      onChange={props.handleGenderPreference}
    />
    <label or="men">Men</label>
    </div>
    <div>
    <input
      type="checkbox"
      id="nb"
      name="nb"
      value="nb"
      onChange={props.handleGenderPreference}
    />
    <label htmlFor="nb">Non-binary / Other</label>
    </div>
    <div>
    <S.Button onClick={props.decrementPage}>Previous</S.Button>
    <S.Button onClick={props.incrementPage}>Next</S.Button>
    </div>
  </>
);

const languages = [
  "Mandarin Chinese",
  "Spanish",
  "English",
  "Hindi/Urdu",
  "Arabic",
  "Bengali",
  "Portuguese",
  "Russian",
  "Japanese",
  "German",
  "Javanese",
  "Punjabi",
  "Wu",
  "French",
  "Telugu",
  "Vietnamese",
  "Marathi",
  "Korean",
  "Tamil",
  "Italian",
  "Turkish",
  "Cantonese/Yue",
];

function renderLanguageList(languageList, props) {
  return languageList.map((language) => {
    return (
      <div>
        <input
          type="checkbox"
          id={language}
          name={language}
          value={language}
          onChange={props.handleLanguages}
        />
        <label for={language}>{language}</label>
      </div>
    );
  });
}

export const PageFour = (props) => (
  <>
    <h2>What languages do you speak?</h2>
    <label htmlFor="languagesSpoken">
    </label>
    <S.Languages>
    {renderLanguageList(languages, props)}
    </S.Languages>
    <div>
    <S.Button onClick={props.decrementPage}>Previous</S.Button>
    <S.Button onClick={props.incrementPage}>Next</S.Button>
    </div>
  </>
);

export const PageFive = (props) => (
  <>
    <h2>I agree to be kind</h2>
    <div>
    <label htmlFor="kindAgreement">
    </label>
    <S.KindBox
      id="kindAgreement"
      name="kindAgreement"
      type="checkbox"
      // onChange={props.handleKindAgreement}
      aria-describedby="kindAgreement"
      required
    />
    <p>
      By ticking this box you agree to be open minded and respectful to others
      on this app and abide by these terms at all times. 
      Any and all unsolicited
      or inapproprite messages will not be tolerated and will be taken
      seriously.{" "}
    </p>
    </div>
    <div>
    <S.Button onClick={props.decrementPage}>Previous</S.Button>
    <S.Button
      type="button"
      // type="submit"
      onClick={(event) => {
        event.preventDefault;
        registerUser(props.formData);
      }}
    >
      Submit
    </S.Button>
    </div>
  </>
);

export async function registerUser(formData) {
  let formDataConnections = Array.from(formData.connections).join(" ");
  let formDataLanguages = Array.from(formData.languages).join(" ");
  const res = await fetch("/api/register", {
    body: JSON.stringify({
      name: formData.name, //NEED TO FIND HOW TO ACCESS PROPS HERE
      email: formData.email,
      gender: formData.gender,
      connections: formDataConnections,
      languages: formDataLanguages,
    }),
    method: "POST",
  });
  const result = await res.json();
  return result;
}

const S = {}

S.Languages = styled.div`
height: 200px;
width: 250px;
overflow: scroll;
overflow-x: hidden;
display: flex;
flex-direction: column;
> * {
  margin: 0.1rem 0.5rem;
}
`

S.GenderSelect = styled.select`
background: transparent;
`

S.Input = styled.input`
background: transparent;
`

S.Button = styled.button`
background: transparent;
`

S.KindBox = styled.input`
margin: 0 1rem 0 0.5rem;
`
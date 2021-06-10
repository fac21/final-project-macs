// import { createUser } from "../database/model";

export const PageOne = (props) => (
  <>
    <h2>Please enter your details</h2>
    <label htmlFor="name">
      Name
      <span aria-hidden="true">*</span>
    </label>
    <input
      id="name"
      name="name"
      onChange={props.handleNameChange}
      type="text"
      required
    />
    <label htmlFor="email">
      Email address
      <span aria-hidden="true">*</span>
    </label>
    <input
      id="email"
      name="email"
      onChange={props.handleEmailChange}
      type="email"
      required
    />
    <button onClick={props.incrementPage}>Next</button>
  </>
);

export const PageTwo = (props) => (
  <>
    <h2>How do you identify?</h2>
    <label htmlFor="gender">
      <span aria-hidden="true">*</span>
    </label>
    <select
      id="gender"
      name="gender"
      onChange={props.handleGenderChange}
      aria-describedby="genderedRequirements"
      required
    >
      <option value="woman">Woman</option>
      <option value="man">Man</option>
      <option value="nb">Non-binary / Other</option>
      <option value="not_specified">Prefer not to say</option>
    </select>
    <button onClick={props.decrementPage}>Previous</button>
    <button onClick={props.incrementPage}>Next</button>
  </>
);

export const PageThree = (props) => (
  <>
    <h2>Who would you like to connect with?</h2>
    (please tick all that apply)
      <input type ="checkbox" id="women" name="women" value="women" onChange={props.handleGenderPreference}/>
      <label for="women">Women</label>
      <input type ="checkbox" id="men" name="men" value="men" onChange={props.handleGenderPreference}/>
      <label for="men">Men</label>
      <input type ="checkbox" id="nb" name="nb" value="nb" onChange={props.handleGenderPreference}/>
      <label for="nb">Non-binary / Other</label>
    <button onClick={props.decrementPage}>Previous</button>
    <button onClick={props.incrementPage}>Next</button>
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
  "Cantonese/Yue"
]

function renderLanguageList(languageList, props) {
  return languageList.map(language => {
    return (
      <>
      <input type ="checkbox" id={language} name={language} value={language} onChange={props.handleLanguages}/>
      <label for={language}>{language}</label>
      </>
    )
  })
}

export const PageFour = (props) => (
  <>
    <h2>What languages do you speak?</h2>
    <label htmlFor="languagesSpoken">
      <span aria-hidden="true">*</span>
    </label>
{renderLanguageList(languages, props)}
    <button onClick={props.decrementPage}>Previous</button>
    <button onClick={props.incrementPage}>Next</button>
  </>
);

export const PageFive = (props) => (
  <>
    <h2>I agree to be kind</h2>
    <p>By ticking this box you agree to be open minded and respectful to others on this app and abide by these terms at all times.
        Any and all unsolicited or inapproprite messages will not be tolerated and will be taken seriously. </p>
    <label htmlFor="kindAgreement">
      <span aria-hidden="true">*</span>
    </label>
    <input
      id="kindAgreement"
      name="kindAgreement"
      type="checkbox"
      // onChange={props.handleKindAgreement}
      aria-describedby="kindAgreement"
      required
    />
    <button onClick={props.decrementPage}>Previous</button>
    <button type="button">clickmeh</button>
  </>
);


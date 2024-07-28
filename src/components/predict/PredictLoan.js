import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Predictloan } from '../../api/predictloan';

export default function PredictLoan() {
  const [Gender, setGender] = useState('');
  const [Married, setMarried] = useState('');
  const [Dependent, setDependent] = useState('');
  const [Education, setEducation] = useState('');
  const [SelfEmp, setSelfEmp] = useState('');
  const [ApInc, setApInc] = useState('');
  const [CoInc, setCoInc] = useState('');
  const [LoanAmount, setLoanAmount] = useState('');
  const [Loanterm, setLoanterm] = useState('');
  const [Credithistory, setCredithistory] = useState('');
  const [Area, setArea] = useState('');
  const [Ans, setAns] = useState('');

  const handleClick = async () => {
    const ans = {
      gender: Gender,
      married: Married,
      dependent: Dependent,
      education: Education,
      self_emp: SelfEmp,
      ap_income: ApInc,
      coap_income: CoInc,
      loan_amount: LoanAmount,
      loan_term: Loanterm,
      credit_history: Credithistory,
      prop_area: Area,
    };

    try {
      const temp = await Predictloan(ans);
      if (temp.ans === 1) {
        setAns('Loan has been approved');
      } else {
        setAns('Sorry, your loan cannot be approved');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1 className="h1-pred-crop">LOAN APPROVAL PREDICTION</h1>
      <br />
      <br />
      <div className="form-container">
        <h2>Fill up the details (all details are compulsory to fill)</h2>

        <div className="form-group">
          <label htmlFor="genderDropdown">Gender:</label>
          <select
            className="form-control"
            id="genderDropdown"
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled hidden>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="maritalDropdown">Marital Status:</label>
          <select
            className="form-control"
            id="maritalDropdown"
            value={Married}
            onChange={(e) => setMarried(e.target.value)}
          >
            <option value="" disabled hidden>
              Select Marital Status
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dependentDropdown">No of Dependents:</label>
          <select
            className="form-control"
            id="dependentDropdown"
            value={Dependent}
            onChange={(e) => setDependent(e.target.value)}
          >
            <option value="" disabled hidden>
              People dependent on your income
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="educationDropdown">Education Level:</label>
          <select
            className="form-control"
            id="educationDropdown"
            value={Education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="" disabled hidden>
              Select education
            </option>
            <option value="Graduate">Graduate</option>
            <option value="Not Graduate">Not Graduate</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="selfEmpDropdown">Are you self-employed?</label>
          <select
            className="form-control"
            id="selfEmpDropdown"
            value={SelfEmp}
            onChange={(e) => setSelfEmp(e.target.value)}
          >
            <option value="" disabled hidden>
              Self Employed status
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="apIncomeInput">Enter your income:</label>
          <input
            type="number"
            id="apIncomeInput"
            className="form-control"
            value={ApInc}
            onChange={(e) => setApInc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coIncomeInput">Enter your partner/co-applicant income:</label>
          <input
            type="number"
            id="coIncomeInput"
            className="form-control"
            value={CoInc}
            onChange={(e) => setCoInc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanAmountInput">Enter Loan amount:</label>
          <input
            type="number"
            id="loanAmountInput"
            className="form-control"
            value={LoanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTermInput">Enter term of loan in months:</label>
          <input
            type="number"
            id="loanTermInput"
            className="form-control"
            value={Loanterm}
            onChange={(e) => setLoanterm(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="creditHistoryDropdown">Status of credit:</label>
          <select
            className="form-control"
            id="creditHistoryDropdown"
            value={Credithistory}
            onChange={(e) => setCredithistory(e.target.value)}
          >
            <option value="" disabled hidden>
              Any dues left or completed?
            </option>
            <option value="No dues">No dues</option>
            <option value="Dues left">Dues left</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="areaDropdown">Type of area of property:</label>
          <select
            className="form-control"
            id="areaDropdown"
            value={Area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="" disabled hidden>
              Property Area Type
            </option>
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
            <option value="Semiurban">Semiurban</option>
          </select>
        </div>

        <Button variant="primary mb-2 mt-2" onClick={handleClick}>
          Submit
        </Button>

        <br />
        <p>
          <h3>Loan Status: {Ans}</h3>
        </p>
      </div>
    </Container>
  );
}

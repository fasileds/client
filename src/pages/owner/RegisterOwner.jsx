/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function RegisterOwnere() {
  const [email, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/api/auth/register/owner",
        {
          userName,
          email,
          password,
          phoneNo,
          address,
        }
      );
      console.log(res.data);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (success) {
    return <Navigate to="/owner/login" replace />;
  }

  return (
    <div css={registerContainerStyle}>
      <div css={registerLeftStyle}>
        <img src="/logo2.png" alt="Logo" />
      </div>
      <div css={registerRightStyle}>
        <div css={holeStyle}>
          <div css={topPartStyle}>
            <svg
              width="206"
              height="34"
              viewBox="0 0 206 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.3114H4.61372L3.16345 4.30831H7.40401L6.23361 0.517258C11.4834 0.864983 16.1565 2.73931 20.6515 5.15643C16.7502 4.11325 12.9167 2.84956 8.72706 2.32373C9.08327 3.44324 9.42251 4.38464 9.67695 5.35149C11.2488 11.4409 12.798 17.5388 14.3246 23.6452C14.5536 24.4934 14.4433 25.6807 14.9776 26.2405C15.5119 26.8002 16.6145 26.6052 17.4711 26.7239C20.9059 27.2073 24.256 27.9282 27.3092 29.7177C27.9042 30.082 28.4712 30.4902 29.0054 30.939C22.2364 30.4493 15.4377 31.3143 9.00694 33.4833C7.06476 24.7902 4.46954 16.3006 0 8.3114ZM5.59753 5.572C5.90285 6.30985 6.1488 6.89505 6.38627 7.48873C8.89541 14.1369 10.9359 20.9526 12.4927 27.8858C12.7047 28.7339 13.0524 28.912 13.8666 28.8866C16.0632 28.8187 18.2598 28.8102 20.4564 28.8866C21.754 28.8866 23.0517 29.1495 24.3493 29.2937C24.113 29.0674 23.82 28.9091 23.5012 28.8357C20.6704 28.1392 17.7541 27.8536 14.8419 27.9876C13.9938 27.9876 13.697 27.7416 13.4934 26.9529C11.6446 19.9644 9.77872 13.0015 7.93832 6.04694C7.84503 5.69922 7.70933 5.36845 7.59059 5.00377L5.59753 5.572ZM11.4071 30.7694L5.0293 8.97293L2.8751 9.65989C6.03229 16.7877 8.51399 24.1958 10.2876 31.7871L15.4356 30.4301L15.3847 30.1842L11.4071 30.7694Z"
                fill="#00ABFF"
              />
              <path
                d="M50.9206 2.10293L38.8265 5.16461C43.4996 2.75598 48.1557 0.88165 53.4395 0.5L52.2606 4.29954H56.5011L55.0169 8.27718H59.6307C55.2544 16.3003 52.5829 24.7475 50.6577 33.5C44.1902 31.3021 37.3389 30.4619 30.532 31.032C32.0639 29.6489 33.9093 28.6592 35.909 28.1484C38.4533 27.4869 41.1249 27.0459 43.7456 26.5964C44.5173 26.4607 44.8481 26.2656 45.0177 25.409C46.3837 17.778 48.3084 10.2576 50.7764 2.90864C50.8188 2.78142 50.8273 2.64572 50.9206 2.10293ZM52.1079 4.98651C51.9807 5.31727 51.8535 5.58867 51.7687 5.83462C51.2429 7.72591 50.6916 9.60871 50.1997 11.5085C48.871 16.648 47.5536 21.7904 46.2475 26.9356C46.0609 27.6565 45.7217 27.9025 44.9244 27.9279C42.5921 28.0042 40.2598 28.1739 37.936 28.4113C36.9598 28.572 35.9962 28.8015 35.0524 29.0983L46.9938 28.5555C48.8936 20.9225 50.8866 13.1029 54.0586 5.5293L52.1079 4.98651ZM49.4109 31.7953C51.1646 24.195 53.641 16.7799 56.8065 9.65112L54.6607 8.98111C52.5065 16.3173 50.4202 23.5517 48.2829 30.7436L44.424 30.1924V30.4468L49.4109 31.7953Z"
                fill="#00ABFF"
              />
              <path
                d="M5.59741 5.5716L7.59047 4.9864C7.70921 5.35109 7.84491 5.68185 7.9382 6.02958C9.7786 12.9841 11.6275 19.9471 13.434 26.9186C13.6375 27.7073 13.9004 27.9872 14.7825 27.9532C17.6946 27.8193 20.6109 28.1049 23.4417 28.8014C23.7605 28.8748 24.0535 29.033 24.2898 29.2593C22.9922 29.1152 21.6946 28.8862 20.3969 28.8522C18.2003 28.7759 16.0037 28.7844 13.8071 28.8522C12.959 28.8522 12.6452 28.7165 12.4332 27.8515C10.8923 20.9456 8.87175 14.1555 6.38616 7.53074C6.14868 6.89465 5.90273 6.30946 5.59741 5.5716Z"
                fill="white"
              />
              <path
                d="M11.407 30.7692L15.3846 30.167L15.4355 30.4129L10.2875 31.7869C8.5139 24.1956 6.0322 16.7874 2.875 9.65967L5.0292 8.9727L11.407 30.7692Z"
                fill="white"
              />
              <path
                d="M52.1078 4.9864L54.0584 5.56312C50.8865 13.1368 48.8934 20.9563 46.9936 28.5893L35.0522 29.1321C35.996 28.8354 36.9596 28.6058 37.9358 28.4452C40.2596 28.2077 42.592 28.0381 44.9243 27.9617C45.7215 27.9617 46.0607 27.6903 46.2473 26.9694C47.5534 21.8242 48.8708 16.6819 50.1995 11.5423C50.6914 9.64253 51.2427 7.75973 51.7685 5.86844C51.8533 5.60553 51.9805 5.33413 52.1078 4.9864Z"
                fill="white"
              />
              <path
                d="M49.411 31.7952L44.3901 30.4298V30.1753L48.249 30.7266C50.3524 23.5346 52.4896 16.3087 54.6268 8.96408L56.7726 9.63409C53.6177 16.7695 51.1526 24.1904 49.411 31.7952Z"
                fill="white"
              />
              <path
                d="M81.7144 26.9V6.78572H88.4224C89.759 6.78572 90.8614 7.02798 91.7295 7.51251C92.5977 7.99048 93.2442 8.63542 93.6689 9.44733C94.0936 10.2527 94.3059 11.1464 94.3059 12.1286C94.3059 12.9929 94.1592 13.7066 93.8656 14.2696C93.5783 14.8327 93.1973 15.278 92.7226 15.6054C92.2542 15.9327 91.7452 16.175 91.1955 16.3321V16.5286C91.7826 16.5679 92.3729 16.7839 92.9662 17.1768C93.5596 17.5696 94.0561 18.1327 94.4558 18.8661C94.8556 19.5994 95.0554 20.4964 95.0554 21.5571C95.0554 22.5655 94.8368 23.4723 94.3996 24.2777C93.9624 25.083 93.2723 25.7214 92.3291 26.1929C91.386 26.6643 90.1587 26.9 88.6472 26.9H81.7144ZM84.0378 24.7393H88.6472C90.165 24.7393 91.2424 24.4316 91.8794 23.8161C92.5228 23.1941 92.8444 22.4411 92.8444 21.5571C92.8444 20.8762 92.6789 20.2476 92.3479 19.6714C92.0168 19.0887 91.5453 18.6238 90.9332 18.2768C90.3211 17.9232 89.5966 17.7464 88.7597 17.7464H84.0378V24.7393ZM84.0378 15.625H88.3474C89.047 15.625 89.6778 15.481 90.2399 15.1929C90.8083 14.9048 91.258 14.4988 91.589 13.975C91.9263 13.4512 92.0949 12.8357 92.0949 12.1286C92.0949 11.2446 91.8014 10.4949 91.2143 9.87947C90.6272 9.25745 89.6965 8.94643 88.4224 8.94643H84.0378V15.625Z"
                fill="black"
              />
              <path
                d="M104.42 27.2143C103.12 27.2143 101.981 26.8902 101 26.242C100.026 25.5938 99.2636 24.6869 98.7139 23.5214C98.1706 22.356 97.8989 20.9941 97.8989 19.4357C97.8989 17.8643 98.1706 16.4926 98.7139 15.3205C99.2636 14.1485 100.026 13.2384 101 12.5902C101.981 11.942 103.12 11.6179 104.42 11.6179C105.719 11.6179 106.855 11.942 107.83 12.5902C108.81 13.2384 109.572 14.1485 110.116 15.3205C110.665 16.4926 110.94 17.8643 110.94 19.4357C110.94 20.9941 110.665 22.356 110.116 23.5214C109.572 24.6869 108.81 25.5938 107.83 26.242C106.855 26.8902 105.719 27.2143 104.42 27.2143ZM104.42 25.1322C105.406 25.1322 106.218 24.867 106.855 24.3366C107.492 23.8063 107.964 23.1089 108.27 22.2446C108.576 21.3804 108.729 20.4441 108.729 19.4357C108.729 18.4274 108.576 17.4878 108.27 16.617C107.964 15.7461 107.492 15.0423 106.855 14.5054C106.218 13.9685 105.406 13.7 104.42 13.7C103.433 13.7 102.621 13.9685 101.984 14.5054C101.347 15.0423 100.875 15.7461 100.569 16.617C100.263 17.4878 100.11 18.4274 100.11 19.4357C100.11 20.4441 100.263 21.3804 100.569 22.2446C100.875 23.1089 101.347 23.8063 101.984 24.3366C102.621 24.867 103.433 25.1322 104.42 25.1322Z"
                fill="black"
              />
              <path
                d="M120.161 27.2143C118.862 27.2143 117.722 26.8902 116.742 26.242C115.767 25.5938 115.005 24.6869 114.456 23.5214C113.912 22.356 113.641 20.9941 113.641 19.4357C113.641 17.8643 113.912 16.4926 114.456 15.3205C115.005 14.1485 115.767 13.2384 116.742 12.5902C117.722 11.942 118.862 11.6179 120.161 11.6179C121.46 11.6179 122.597 11.942 123.572 12.5902C124.552 13.2384 125.314 14.1485 125.858 15.3205C126.407 16.4926 126.682 17.8643 126.682 19.4357C126.682 20.9941 126.407 22.356 125.858 23.5214C125.314 24.6869 124.552 25.5938 123.572 26.242C122.597 26.8902 121.46 27.2143 120.161 27.2143ZM120.161 25.1322C121.148 25.1322 121.96 24.867 122.597 24.3366C123.234 23.8063 123.706 23.1089 124.012 22.2446C124.318 21.3804 124.471 20.4441 124.471 19.4357C124.471 18.4274 124.318 17.4878 124.012 16.617C123.706 15.7461 123.234 15.0423 122.597 14.5054C121.96 13.9685 121.148 13.7 120.161 13.7C119.174 13.7 118.363 13.9685 117.725 14.5054C117.088 15.0423 116.617 15.7461 116.311 16.617C116.005 17.4878 115.852 18.4274 115.852 19.4357C115.852 20.4441 116.005 21.3804 116.311 22.2446C116.617 23.1089 117.088 23.8063 117.725 24.3366C118.363 24.867 119.174 25.1322 120.161 25.1322Z"
                fill="black"
              />
              <path
                d="M132.118 21.4L132.081 18.5321H132.53L138.826 11.8143H141.562L134.854 18.925H134.666L132.118 21.4ZM130.057 26.9V6.78572H132.268V26.9H130.057ZM139.201 26.9L133.58 19.4357L135.154 17.825L142.012 26.9H139.201Z"
                fill="black"
              />
              <path
                d="M152.127 26.9V6.78572H158.611C160.11 6.78572 161.34 7.05417 162.302 7.59108C163.264 8.12143 163.976 8.85149 164.438 9.78126C164.9 10.711 165.131 11.7685 165.131 12.9536C165.131 14.1387 164.9 15.1896 164.438 16.1063C163.976 17.0229 163.267 17.7432 162.311 18.267C161.356 18.7842 160.135 19.0429 158.648 19.0429H153.402V16.8429H158.573C159.597 16.8429 160.422 16.6857 161.047 16.3714C161.677 16.0571 162.133 15.6119 162.414 15.0357C162.702 14.453 162.845 13.7589 162.845 12.9536C162.845 12.1482 162.702 11.4444 162.414 10.842C162.127 10.2396 161.668 9.77471 161.037 9.44733C160.406 9.1134 159.573 8.94643 158.536 8.94643H154.451V26.9H152.127ZM161.159 17.8643L165.881 26.9H163.183L158.536 17.8643H161.159Z"
                fill="black"
              />
              <path
                d="M174.582 27.2143C173.195 27.2143 171.999 26.8935 170.994 26.2518C169.994 25.6036 169.223 24.7 168.68 23.5411C168.143 22.3756 167.874 21.0202 167.874 19.475C167.874 17.9298 168.143 16.5679 168.68 15.3893C169.223 14.2042 169.979 13.281 170.947 12.6196C171.921 11.9518 173.058 11.6179 174.357 11.6179C175.107 11.6179 175.847 11.7488 176.578 12.0107C177.308 12.2726 177.974 12.6982 178.573 13.2875C179.173 13.8702 179.651 14.6429 180.007 15.6054C180.363 16.5679 180.541 17.753 180.541 19.1607V20.1429H169.448V18.1393H178.292C178.292 17.2881 178.13 16.5286 177.805 15.8607C177.486 15.1929 177.03 14.6658 176.437 14.2795C175.85 13.8932 175.157 13.7 174.357 13.7C173.477 13.7 172.715 13.9292 172.071 14.3875C171.434 14.8393 170.944 15.4286 170.6 16.1554C170.257 16.8821 170.085 17.6613 170.085 18.4929V19.8286C170.085 20.9679 170.272 21.9336 170.647 22.7259C171.028 23.5116 171.556 24.1107 172.23 24.5232C172.905 24.9292 173.689 25.1322 174.582 25.1322C175.163 25.1322 175.688 25.047 176.156 24.8768C176.631 24.7 177.04 24.4381 177.383 24.0911C177.727 23.7375 177.992 23.2988 178.18 22.775L180.316 23.4036C180.091 24.1631 179.713 24.831 179.182 25.4072C178.651 25.9768 177.995 26.422 177.215 26.7429C176.434 27.0571 175.556 27.2143 174.582 27.2143Z"
                fill="black"
              />
              <path
                d="M186.115 17.825V26.9H183.904V11.8143H186.04V14.1714H186.227C186.565 13.4054 187.077 12.7899 187.764 12.325C188.451 11.8536 189.338 11.6179 190.425 11.6179C191.399 11.6179 192.251 11.8274 192.982 12.2464C193.713 12.6589 194.281 13.2875 194.687 14.1321C195.093 14.9702 195.296 16.031 195.296 17.3143V26.9H193.085V17.4714C193.085 16.2863 192.792 15.3631 192.205 14.7018C191.618 14.0339 190.812 13.7 189.787 13.7C189.082 13.7 188.451 13.8604 187.895 14.1813C187.345 14.5021 186.911 14.9702 186.593 15.5857C186.274 16.2012 186.115 16.9476 186.115 17.825Z"
                fill="black"
              />
              <path
                d="M205.595 11.8143V13.7786H198.137V11.8143H205.595ZM200.311 8.20001H202.522V22.5786C202.522 23.2333 202.613 23.7244 202.794 24.0518C202.981 24.3726 203.218 24.5887 203.506 24.7C203.799 24.8048 204.108 24.8572 204.433 24.8572C204.677 24.8572 204.877 24.8441 205.033 24.8179C205.189 24.7851 205.314 24.7589 205.408 24.7393L205.857 26.8214C205.707 26.8804 205.498 26.9393 205.23 26.9982C204.961 27.0637 204.621 27.0964 204.208 27.0964C203.584 27.0964 202.972 26.9557 202.372 26.6741C201.779 26.3926 201.285 25.9637 200.892 25.3875C200.505 24.8113 200.311 24.0845 200.311 23.2071V8.20001Z"
                fill="black"
              />
            </svg>
          </div>
          <h2
            css={{
              marginTop: "1rem",
              marginBottom: "0.8rem",
              fontSize: "1.25rem",
              color: "#374151",
            }}
          >
            Signup as owner
            <hr css={{ marginTop: "0.5rem", marginBottom: "1rem" }} />
          </h2>
        </div>
        <form css={formContainerStyle} onSubmit={handleOnClick}>
          <div css={formGroupStyle}>
            <input
              type="email"
              name="floating_email"
              onChange={(e) => setEmail(e.target.value)}
              id="floating_email"
              css={formInputStyle}
              placeholder=" "
              required
            />
            <label htmlFor="floating_email" css={formLabelStyle}>
              Email address
            </label>
          </div>
          <div css={formGroupStyle}>
            <input
              type="password"
              name="floating_password"
              onChange={(e) => setPassword(e.target.value)}
              id="floating_password"
              css={formInputStyle}
              placeholder=" "
              required
            />
            <label htmlFor="floating_password" css={formLabelStyle}>
              Password
            </label>
          </div>
          <div css={gridStyle}>
            <div css={formGroupStyle}>
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                css={formInputStyle}
                onChange={(e) => setName(e.target.value)}
                placeholder=" "
                required
              />
              <label htmlFor="floating_first_name" css={formLabelStyle}>
                Name
              </label>
            </div>
          </div>
          <div css={gridStyle}>
            <div css={formGroupStyle}>
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                css={formInputStyle}
                placeholder=" "
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
              <label htmlFor="floating_phone" css={formLabelStyle}>
                Phone No (+251-979-308-067)
              </label>
            </div>
          </div>
          <div css={gridStyle}>
            <div css={formGroupStyle}>
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                css={formInputStyle}
                onChange={(e) => setAddress(e.target.value)}
                placeholder=" "
                required
              />
              <label htmlFor="floating_company" css={formLabelStyle}>
                Address
              </label>
            </div>
          </div>
          <div css={flexContainerStyle}>
            <div css={checkboxContainerStyle}>
              <input id="terms" type="checkbox" css={checkboxStyle} required />
            </div>
            <label htmlFor="terms" css={labelStyle}>
              I agree with the <span> </span>
              <a href="#" css={labelLinkStyle}>
                Terms <span> </span>
              </a>
              and <span> </span>
              <a href="#" css={labelLinkStyle}>
                Conditions
              </a>
            </label>
          </div>
          <button type="submit" css={buttonSubmitStyle}>
            SIGNUP
          </button>
          <div css={{ textAlign: "center", marginTop: "0.8rem" }}>
            <label css={labelStyle}>
              Already have an account? <a href="/owner/login">Login</a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

// Emotion CSS-in-JS styles

const registerContainerStyle = css`
  display: flex;
  align-items: center;
  margin: 0;
  height: 100%;
`;

const registerLeftStyle = css`
  flex: 1;
  background: rgba(23, 27, 54, 1);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 300px;
    height: 200px;
  }
`;

const registerRightStyle = css`
  flex: 1;
  padding: 1% 10% 0% 10%;
`;

const formContainerStyle = css`
  max-width: 100%;
  margin: 0 auto;
`;

const formGroupStyle = css`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

const formInputStyle = css`
  width: 100%;
  padding: 0.875rem;
  font-size: 0.9rem;
  color: #374151;
  background-color: transparent;
  border: 0.5px solid #d1d5db;
  border-radius: 0.375rem;
  transition: border-color 0.2s;
  height: 39px;

  &:focus {
    border-color: #00abff;
    outline: none;
    border: 0.5px solid #00abff;
  }

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translateY(-1.5rem) scale(0.75);
    color: #00abff;
  }
`;

const formLabelStyle = css`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  font-size: 0.9rem;
  color: #6b7280;
  transform: translateY(-50%);
  transform-origin: left;
  transition: transform 0.2s, color 0.2s;
  pointer-events: none;
`;

const gridStyle = css`
  display: grid;
  gap: 1.5rem;
`;

const flexContainerStyle = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.25rem; /* mb-5 */
`;

const checkboxContainerStyle = css`
  display: flex;
  align-items: center;
  height: 1.25rem; /* h-5 */
`;

const checkboxStyle = css`
  width: 1rem; /* w-4 */
  height: 1rem; /* h-4 */
  border: 1px solid #d1d5db; /* border-gray-300 */
  border-radius: 0.25rem; /* rounded */
  background-color: #f9fafb; /* bg-gray-50 */
  outline: none;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 0 0 0.1875rem rgba(59, 130, 246, 0.3); /* focus:ring-3 focus:ring-blue-300 */
  }
`;

const labelStyle = css`
  margin-inline-start: 0.5rem; /* ms-2 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #111827; /* text-gray-900 */

  a {
    color: #00abff; /* text-blue-600 */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const labelLinkStyle = css`
  color: #2563eb; /* text-blue-600 */

  &:hover {
    text-decoration: underline;
  }
`;

const buttonSubmitStyle = css`
  color: #ffffff;
  background-color: #00abff; /* bg-blue-700 */
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  display: inline-block;
  width: 100%;
  height: 34px;

  &:hover {
    background-color: #00abff; /* bg-blue-800 */
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2),
      0px 5px 4px -2px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.5); /* focus:ring-4 */
  }
`;

const topPartStyle = css`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 30px;
    object-fit: cover;
    margin-left: 75px;
    margin-bottom: 20px;
  }

  span {
    font-size: 20px;
  }
`;

const holeStyle = css`
  span {
    font-size: 20px;
    margin-bottom: 20px;
    margin-left: 75px;
  }
`;

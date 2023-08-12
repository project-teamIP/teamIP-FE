import { useDispatch, useSelector } from "react-redux";
import Button from "../button/Button";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RootState } from "../../../types/user";
import { useMutation } from "react-query";
import { userLogout } from "../../../api/api";
import { logOut } from "../../../redux/modules/userAuth";

const Header = () => {
  //메인헤더만 오렌지컬러
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  //로그인 상태 따라 버튼 변경
  const state = useSelector((state: RootState) => state.isLoggedIn.isLoggedIn);
  console.log("로그인상태", state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation(userLogout, {
    onSuccess: () => {
      dispatch(logOut());
      navigate("/");
    },
  });

  const onClickLogoutHandler = () => {
    logoutMutation.mutate();
  };

  return (
    <S.HeaderBox ismainpage={isMainPage}>
      <S.HeaderInner>
        <S.Nav>
          <Link to="/">
            <svg
              width="101"
              height="24"
              viewBox="0 0 101 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.752 7.284H0.91V3.41H4.316V0.289999H8.346V3.41H11.752V7.284ZM6.37 17.294C6.734 17.294 7.02 17.086 7.28 16.644C7.488 16.228 7.618 15.552 7.618 14.616C7.618 13.732 7.488 13.056 7.28 12.588C7.02 12.172 6.734 11.938 6.37 11.938C5.98 11.938 5.668 12.172 5.46 12.588C5.226 13.056 5.122 13.732 5.122 14.616C5.122 15.552 5.226 16.228 5.486 16.644C5.694 17.086 6.006 17.294 6.37 17.294ZM6.37 21.194C4.654 21.194 3.328 20.674 2.444 19.608C1.534 18.568 1.092 16.904 1.092 14.616C1.092 12.432 1.56 10.794 2.522 9.676C3.458 8.584 4.758 8.038 6.37 8.038C7.982 8.038 9.256 8.584 10.218 9.676C10.478 10.014 10.738 10.378 10.92 10.794H13.52V0.939998H17.654V21.896H13.52V14.902C13.13 14.928 12.766 14.928 12.428 14.928C12.142 14.954 11.882 14.954 11.648 14.954C11.596 17.086 11.128 18.62 10.296 19.608C9.36 20.674 8.06 21.194 6.37 21.194ZM18.928 21.896V0.939998H23.036V21.896H18.928ZM31.6308 5.1C31.3708 5.1 31.1108 5.178 30.8768 5.308C30.6168 5.464 30.4088 5.724 30.2268 6.14C30.0448 6.556 29.9148 7.154 29.8108 7.908C29.6808 8.688 29.6288 9.728 29.6288 10.976C29.6288 12.276 29.6808 13.29 29.8108 14.044C29.9148 14.824 30.0448 15.422 30.2268 15.838C30.4088 16.254 30.6168 16.54 30.8768 16.644C31.1108 16.8 31.3708 16.852 31.6308 16.852C31.8648 16.852 32.0988 16.8 32.3588 16.644C32.5928 16.54 32.8008 16.254 33.0088 15.838C33.1648 15.422 33.3208 14.824 33.4508 14.044C33.5548 13.29 33.6328 12.276 33.6328 10.976C33.6328 9.728 33.5548 8.688 33.4508 7.908C33.3208 7.154 33.1648 6.556 33.0088 6.14C32.8008 5.724 32.5928 5.464 32.3588 5.308C32.0988 5.178 31.8648 5.1 31.6308 5.1ZM31.6308 0.809999C32.6188 0.809999 33.5028 0.991999 34.3088 1.356C35.0888 1.746 35.7388 2.344 36.3108 3.15C36.8568 3.982 37.2988 5.022 37.6108 6.296C37.8968 7.596 38.0528 9.156 38.0528 10.976C38.0528 12.848 37.8968 14.408 37.6108 15.682C37.2988 16.982 36.8568 18.022 36.3108 18.828C35.7388 19.66 35.0888 20.232 34.3088 20.596C33.5028 20.96 32.6188 21.142 31.6308 21.142C30.6168 21.142 29.7328 20.96 28.9528 20.596C28.1468 20.232 27.4708 19.66 26.9248 18.828C26.3528 18.022 25.9368 16.982 25.6508 15.682C25.3388 14.408 25.2088 12.848 25.2088 10.976C25.2088 9.156 25.3388 7.596 25.6508 6.296C25.9368 5.022 26.3528 3.982 26.9248 3.15C27.4708 2.344 28.1468 1.746 28.9528 1.356C29.7328 0.991999 30.6168 0.809999 31.6308 0.809999ZM40.0288 21.87V0.939998H44.8388V21.87H40.0288ZM47.373 16.592H52.495V19.608L52.027 23.248H48.673L48.803 21.038H47.373V16.592ZM62.793 9.702C63.027 9.702 63.287 9.676 63.573 9.572C63.833 9.52 64.093 9.39 64.327 9.182C64.535 9.026 64.743 8.766 64.899 8.454C65.055 8.168 65.133 7.804 65.133 7.336C65.133 6.92 65.055 6.556 64.899 6.244C64.743 5.958 64.535 5.724 64.327 5.516C64.093 5.36 63.833 5.23 63.573 5.126C63.287 5.048 63.027 4.996 62.793 4.996C62.533 4.996 62.247 5.048 61.987 5.126C61.701 5.23 61.441 5.36 61.233 5.516C60.999 5.724 60.817 5.958 60.687 6.244C60.531 6.556 60.453 6.92 60.453 7.336C60.453 7.804 60.531 8.168 60.687 8.454C60.817 8.766 60.999 9.026 61.233 9.182C61.441 9.39 61.701 9.52 61.987 9.572C62.247 9.676 62.533 9.702 62.793 9.702ZM62.793 13.992C60.791 13.992 59.179 13.446 57.931 12.302C56.657 11.21 56.033 9.546 56.033 7.336C56.033 6.296 56.189 5.334 56.527 4.502C56.839 3.696 57.307 2.994 57.905 2.422C58.503 1.85 59.231 1.434 60.063 1.122C60.869 0.836 61.779 0.679999 62.793 0.679999C63.781 0.679999 64.691 0.836 65.523 1.122C66.329 1.434 67.031 1.85 67.655 2.422C68.227 2.994 68.695 3.696 69.059 4.502C69.371 5.334 69.553 6.296 69.553 7.336C69.553 9.546 68.903 11.21 67.655 12.302C66.381 13.446 64.769 13.992 62.793 13.992ZM78.887 5.048V9.546C78.679 9.546 78.419 9.572 78.133 9.572C77.821 9.598 77.509 9.624 77.223 9.676C76.911 9.728 76.625 9.754 76.365 9.806C76.183 9.858 76.053 9.91 75.949 9.962V15.552H71.399V0.939998H75.949V5.646C76.235 5.464 76.573 5.334 77.015 5.204C77.483 5.1 78.107 5.048 78.887 5.048ZM61.727 14.928V17.918H76.209V21.818H57.177V14.928H61.727ZM85.5349 1.018V9.052H90.9429C91.2809 9.052 91.6189 9.052 91.9829 9.026C92.2949 9.026 92.6329 9.026 92.9709 9C93.2829 9 93.5689 8.974 93.8809 8.922V12.016C93.5689 12.094 93.2829 12.146 92.9709 12.172C92.6329 12.224 92.2949 12.25 91.9569 12.25C91.5929 12.276 91.2289 12.276 90.8649 12.276C90.4749 12.302 90.0849 12.302 89.7209 12.302H80.7249V1.018H85.5349ZM95.8049 12.692V8.168C95.6749 8.194 95.5449 8.194 95.4149 8.194C95.0509 8.246 94.6609 8.272 94.2969 8.272C93.9069 8.298 93.5429 8.298 93.1789 8.298C92.8149 8.324 92.4769 8.324 92.2169 8.324H90.0849V5.204H94.6609C94.9989 5.204 95.3109 5.204 95.6229 5.178H95.8049V4.424C95.3629 4.502 94.8429 4.528 94.2709 4.528C93.4389 4.58 92.7629 4.58 92.2169 4.58H90.0849V1.46H94.6609C94.9729 1.46 95.2849 1.46 95.5969 1.434H95.8049V0.939998H100.355V12.692H95.8049ZM91.5409 19.166C92.3729 19.166 93.0489 19.14 93.5949 19.088C94.1149 19.036 94.5309 18.958 94.8429 18.854C95.1549 18.75 95.3629 18.62 95.4929 18.464C95.5969 18.308 95.6489 18.126 95.6489 17.918C95.6489 17.736 95.5969 17.554 95.4929 17.398C95.3629 17.242 95.1549 17.112 94.8429 17.008C94.5309 16.904 94.1149 16.826 93.5949 16.748C93.0489 16.696 92.3729 16.67 91.5409 16.67C90.6829 16.67 89.9809 16.696 89.4609 16.748C88.9149 16.826 88.4989 16.904 88.2129 17.008C87.9009 17.112 87.6929 17.242 87.5889 17.398C87.4849 17.554 87.4329 17.736 87.4329 17.918C87.4329 18.126 87.4849 18.308 87.5889 18.464C87.6929 18.62 87.9009 18.75 88.2129 18.854C88.4989 18.958 88.9149 19.036 89.4609 19.088C89.9809 19.14 90.6829 19.166 91.5409 19.166ZM91.5409 22.65C89.7469 22.65 88.2649 22.52 87.0949 22.312C85.8989 22.078 84.9369 21.766 84.2609 21.35C83.5329 20.934 83.0389 20.44 82.7789 19.842C82.4669 19.27 82.3369 18.646 82.3369 17.918C82.3369 17.268 82.4669 16.644 82.7789 16.072C83.0649 15.5 83.5589 15.006 84.2869 14.564C84.9889 14.148 85.9249 13.81 87.1209 13.55C88.2909 13.316 89.7729 13.186 91.5409 13.186C93.2829 13.186 94.7389 13.316 95.9349 13.55C97.1049 13.81 98.0409 14.148 98.7689 14.564C99.4709 15.006 99.9909 15.5 100.303 16.072C100.589 16.644 100.745 17.268 100.745 17.918C100.745 18.646 100.589 19.27 100.303 19.842C99.9909 20.44 99.4969 20.934 98.7949 21.35C98.0929 21.766 97.1569 22.078 95.9869 22.312C94.7909 22.52 93.3089 22.65 91.5409 22.65Z"
                fill={isMainPage ? "black" : "#FF6E46"}
              />
            </svg>
          </Link>
          <ul>
            <li>
              <S.StyledLink to="/dashboard">home</S.StyledLink>
            </li>
            <li>
              <S.StyledLink to="/">FAQ</S.StyledLink>
            </li>
            <li>
              <S.StyledLink to="/">뭐넣지</S.StyledLink>
            </li>
          </ul>
        </S.Nav>
        {state ? (
          <div>
            <S.StyledLink to="/mypage">
              <Button.Primary size="loginbtn" outlined>
                마이페이지
              </Button.Primary>
            </S.StyledLink>
            <Button.Primary size="loginbtn" onClick={onClickLogoutHandler} outlined>
              로그아웃
            </Button.Primary>
          </div>
        ) : (
          <S.StyledLink to="/login">
            <Button.Primary size="loginbtn" outlined>
              로그인 / 회원가입
            </Button.Primary>
          </S.StyledLink>
        )}
      </S.HeaderInner>
    </S.HeaderBox>
  );
};

export default Header;

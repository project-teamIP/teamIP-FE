import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import Select from "../../common/select/Select";
import * as S from "./style";
import countries from "../../../utils/countries.json";
import interests from "../../../utils/interests.json";
import { useState } from "react";
import { useQuery } from "react-query";
import { getUserInfo } from "../../../api/api";

const MyPageEdit = () => {
  const tempfunc = () => {};

  const { data: user, error, isLoading } = useQuery("myInfo", getUserInfo);
  console.log("내정보", user);

  //관심사
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const onChangeInterestHandler = (selectedInterest: string) => {
    if (selectedInterests.includes(selectedInterest)) {
      setSelectedInterests(selectedInterests.filter((interest) => interest !== selectedInterest));
    } else if (selectedInterests.length < 4) {
      setSelectedInterests([...selectedInterests, selectedInterest]);
    }
  };

  return (
    <div>
      {user && (
        <S.MyPageEditBox>
          <S.ProfileTop>
            <S.ImgForm>
              <img src="https://via.placeholder.com/156" alt="profile_pic" />
              <button>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.0417 6.62497L14.375 3.95831L15.25 3.08331C15.4861 2.84719 15.7813 2.73261 16.1354 2.73956C16.4896 2.7465 16.7847 2.86803 17.0208 3.10414L17.9167 3.99997C18.1528 4.23608 18.2708 4.52775 18.2708 4.87497C18.2708 5.22219 18.1528 5.51386 17.9167 5.74997L17.0417 6.62497ZM16.1667 7.49997L5.66667 18H3V15.3333L13.5 4.83331L16.1667 7.49997Z"
                    fill="white"
                  />
                </svg>
              </button>
            </S.ImgForm>
            <h1>
              만나서 반가워요!
              <br />
              {user.nickname}님
            </h1>
          </S.ProfileTop>
          <form>
            <S.FormGroup>
              <label htmlFor="nickname">닉네임</label>
              <S.Gap>
                <Input value="" placeholder={user.nickname} onChangeHandler={tempfunc} size="etc" />
                <Button.Primary size="the smallest">중복확인</Button.Primary>
              </S.Gap>
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="email">이메일</label>
              <Input value="" placeholder={user.loginId} onChangeHandler={tempfunc} size="large" />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="country">거주국가</label>
              <Select label="거주국가" options={countries} />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="interests">관심사</label>
              <S.RadioGroup>
                {interests.map((interest) => (
                  <S.RadioButton
                    className="radio-label"
                    key={interest}
                    isSelected={selectedInterests.includes(interest)}
                    onClick={() => onChangeInterestHandler(interest)}>
                    <input type="radio" checked={selectedInterests.includes(interest)} readOnly />
                    {interest}
                  </S.RadioButton>
                ))}
              </S.RadioGroup>
            </S.FormGroup>
            <S.BtnPosition>
              <Button.Primary size="small">정보 수정</Button.Primary>
            </S.BtnPosition>
          </form>
        </S.MyPageEditBox>
      )}
    </div>
  );
};

export default MyPageEdit;

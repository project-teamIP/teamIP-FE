import * as S from "./style";
import * as C from "../../../assets/styles/commonStyle";
import phoneSvg from "../../../assets/images/phone.svg";
import rabbitSvg from "../../../assets/images/profileImg/rabbit1.svg";
import { useQuery, useMutation } from "react-query";
import { getBuddies } from "../../../api/api";
import { BuddiesType } from "../../../types/user";

const MyFriend = () => {
  const { data, isLoading } = useQuery("myBuddies", getBuddies);
  const buddiesList = data?.content || [];

  // 로딩중 스피너 설정
  if (isLoading) {
    return (
      <C.SpinnerBox>
        <C.LoadingSpinner>
          <img src={rabbitSvg} alt="isLoading" />
        </C.LoadingSpinner>
      </C.SpinnerBox>
    );
  }

  return (
    <S.MyFriendBox>
      <h1>친구관리</h1>
      <S.Table>
        <S.TableHead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th> </th>
            <th> </th>
          </tr>
        </S.TableHead>
        <S.TableBody>
          {buddiesList.length === 0 ? (
            <S.TableRow>
              <td></td>
              <td>등록된 친구가 없습니다. </td>
            </S.TableRow>
          ) : (
            buddiesList.map((buddy: BuddiesType) => (
              <S.TableRow key={buddy.loginId}>
                <td>
                  <img src="https://via.placeholder.com/60" alt="user_profile" />
                  <span>{buddy.nickname}</span>
                </td>
                <td>{buddy.loginId}</td>
                <S.CallingTd src={phoneSvg} alt="phone" />
                <td>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    {/* SVG path data */}
                  </svg>
                </td>
              </S.TableRow>
            ))
          )}
          {/* {buddiesList.map((buddy: BuddiesType) => (
            <S.TableRow>
              <td>
                <img src="https://via.placeholder.com/60" alt="user_profile" />
                <span>{buddy.nickname}</span>
              </td>
              <td>{buddy.loginId}</td>
              <S.CallingTd src={phoneSvg} alt="phone" />
              <td>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.9925 40C23.3306 40 22.7663 39.7643 22.2996 39.2929C21.8329 38.8215 21.5996 38.2549 21.5996 37.5929C21.5996 36.931 21.8353 36.3667 22.3067 35.9C22.7781 35.4333 23.3447 35.2 24.0067 35.2C24.6686 35.2 25.2329 35.4357 25.6996 35.9071C26.1663 36.3785 26.3996 36.9451 26.3996 37.6071C26.3996 38.269 26.1639 38.8333 25.6925 39.3C25.2211 39.7667 24.6545 40 23.9925 40ZM23.9925 26.4C23.3306 26.4 22.7663 26.1643 22.2996 25.6929C21.8329 25.2215 21.5996 24.6549 21.5996 23.9929C21.5996 23.331 21.8353 22.7667 22.3067 22.3C22.7781 21.8333 23.3447 21.6 24.0067 21.6C24.6686 21.6 25.2329 21.8357 25.6996 22.3071C26.1663 22.7785 26.3996 23.3451 26.3996 24.0071C26.3996 24.669 26.1639 25.2333 25.6925 25.7C25.2211 26.1667 24.6545 26.4 23.9925 26.4ZM23.9925 12.8C23.3306 12.8 22.7663 12.5643 22.2996 12.0929C21.8329 11.6215 21.5996 11.0549 21.5996 10.3929C21.5996 9.73097 21.8353 9.16667 22.3067 8.7C22.7781 8.23333 23.3447 8 24.0067 8C24.6686 8 25.2329 8.2357 25.6996 8.7071C26.1663 9.17847 26.3996 9.74513 26.3996 10.4071C26.3996 11.069 26.1639 11.6333 25.6925 12.1C25.2211 12.5667 24.6545 12.8 23.9925 12.8Z"
                    fill="black"
                  />
                </svg>
              </td>
            </S.TableRow>
          ))} */}
        </S.TableBody>
      </S.Table>
    </S.MyFriendBox>
  );
};

export default MyFriend;

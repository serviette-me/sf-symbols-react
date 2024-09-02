import { IconProps } from "../../types"

export default function CheckmarkDiamondIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.342292459592144 33.337161854805956"
          className={className}
        >
          <path
            d="              M1.8067 20.4705L12.8667 31.5305C15.2737 33.9365 18.0757 33.9365 20.4687 31.5445L31.5427 20.4705C33.9487 18.0635 33.9357 15.2745 31.5427 12.8685L20.4687 1.7945C18.0757 -0.5985 15.2737 -0.5985 12.8807 1.7945L1.7927 12.8685C-0.5993 15.2745 -0.5993 18.0635 1.8067 20.4705ZM5.7717 17.5445C5.1697 16.9425 5.1147 16.4365 5.7717 15.7805L15.7927 5.7595C16.4487 5.1025 16.9547 5.1575 17.5567 5.7595L27.5777 15.7805C28.1797 16.3825 28.2337 16.9015 27.5777 17.5445L17.5567 27.5795C16.9007 28.2225 16.3947 28.1815 15.7927 27.5795ZM15.3007 23.2045C15.9707 23.2045 16.5997 22.8495 16.9827 22.2745L22.4787 13.9895C22.7517 13.5935 22.8607 13.1965 22.8607 12.8545C22.8607 11.8565 21.9997 11.1325 21.0287 11.1325C20.3727 11.1325 19.8537 11.4605 19.4297 12.1575L15.3007 18.8565L13.4417 16.7375C13.0717 16.3275 12.6617 16.0815 12.1147 16.0815C11.1167 16.0815 10.2967 16.8745 10.2967 17.8585C10.2967 18.3235 10.4337 18.6655 10.8167 19.1305L13.5917 22.3295C14.0567 22.8625 14.6037 23.2045 15.3007 23.2045Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.175100464135895 32.17337158969121"
          className={className}
        >
          <path
            d="              M1.6697 19.5099L12.6757 30.5159C14.8907 32.7169 17.2827 32.7309 19.4837 30.5289L30.5307 19.4829C32.7327 17.2949 32.7187 14.8889 30.5177 12.6739L19.5117 1.6679C17.2967 -0.5471 14.8907 -0.5601 12.6897 1.6539L1.6427 12.6879C-0.5583 14.8889 -0.5453 17.2949 1.6697 19.5099ZM4.4447 17.2809C3.6517 16.4879 3.6107 15.7229 4.4447 14.8889L14.8907 4.4569C15.7247 3.6229 16.4897 3.6499 17.2827 4.4429L27.7287 14.9019C28.5217 15.6819 28.5627 16.4609 27.7287 17.2949L17.2827 27.7269C16.4627 28.5609 15.6837 28.5329 14.8907 27.7399ZM14.6717 22.5999C15.2327 22.5999 15.7247 22.3129 16.0527 21.8199L21.9317 12.7559C22.1507 12.4279 22.2867 12.0859 22.2867 11.7579C22.2867 10.9509 21.5757 10.3909 20.8107 10.3909C20.3047 10.3909 19.8807 10.6639 19.5387 11.2109L14.6307 19.1129L12.3607 16.3109C12.0197 15.8869 11.6507 15.7089 11.1857 15.7089C10.3927 15.7089 9.7497 16.3379 9.7497 17.1309C9.7497 17.5139 9.8867 17.8419 10.1737 18.1969L13.2227 21.8479C13.6327 22.3399 14.0837 22.5999 14.6717 22.5999Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.79202252432371 32.79202252432371"
          className={className}
        >
          <path
            d="              M1.7394 20.0051L12.7864 31.0521C15.0974 33.3631 17.7084 33.3761 20.0054 31.0661L31.0664 20.0051C33.3764 17.6951 33.3624 15.0831 31.0524 12.7731L20.0194 1.7401C17.7084 -0.5709 15.0974 -0.5849 12.7864 1.7261L1.7264 12.7871C-0.5846 15.0971 -0.5706 17.6951 1.7394 20.0051ZM5.1444 17.4211C4.4604 16.7381 4.4054 16.0951 5.1444 15.3571L15.3704 5.1441C16.1094 4.4061 16.7374 4.4471 17.4214 5.1441L27.6484 15.3711C28.3454 16.0541 28.3864 16.6971 27.6484 17.4351L17.4354 27.6481C16.6964 28.3861 16.0544 28.3451 15.3704 27.6621ZM15.0014 22.9171C15.6164 22.9171 16.1914 22.6031 16.5464 22.0561L22.2204 13.4151C22.4664 13.0461 22.5894 12.6771 22.5894 12.3351C22.5894 11.4331 21.7964 10.7901 20.9354 10.7901C20.3474 10.7901 19.8684 11.0781 19.4854 11.7061L14.9874 18.9801L12.9374 16.5331C12.5684 16.1221 12.1854 15.9041 11.6794 15.9041C10.7774 15.9041 10.0384 16.6151 10.0384 17.5171C10.0384 17.9411 10.1754 18.2691 10.5174 18.6791L13.4154 22.0971C13.8534 22.6171 14.3594 22.9171 15.0014 22.9171Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.435344379029733 30.445579843928755"
          className={className}
        >
          <path
            d="              M1.4343 18.066L12.3853 29.017C14.2723 30.917 16.1863 30.917 18.0593 29.044L29.0373 18.052C30.8973 16.179 30.9103 14.265 29.0233 12.378L18.0863 1.427C16.1863 -0.473 14.2853 -0.473 12.3983 1.413L1.4063 12.392C-0.4797 14.279 -0.4667 16.179 1.4343 18.066ZM2.6373 16.904C1.5433 15.823 1.5433 14.648 2.6503 13.54L13.5333 2.657C14.6413 1.536 15.8033 1.55 16.8973 2.644L27.7933 13.54C28.8733 14.62 28.9003 15.81 27.7933 16.917L16.9103 27.786C15.7893 28.907 14.6133 28.88 13.5333 27.814ZM13.7523 21.716C14.0943 21.716 14.3813 21.538 14.6003 21.224L21.2303 10.847C21.3543 10.655 21.4773 10.409 21.4773 10.191C21.4773 9.726 21.0533 9.411 20.6153 9.411C20.3423 9.411 20.0823 9.575 19.8913 9.876L13.7113 19.652L10.5533 15.769C10.3073 15.441 10.0743 15.345 9.7733 15.345C9.3223 15.345 8.9533 15.714 8.9533 16.179C8.9533 16.411 9.0493 16.644 9.1993 16.849L12.8633 21.224C13.1233 21.566 13.3973 21.716 13.7523 21.716Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.42152959802364 31.428298299414124"
          className={className}
        >
          <path
            d="              M1.5843 18.8862L12.5493 29.8512C14.6413 31.9422 16.7873 31.9562 18.8523 29.8782L29.8713 18.8582C31.9493 16.7802 31.9363 14.6342 29.8443 12.5422L18.8793 1.5772C16.7873 -0.5148 14.6543 -0.5278 12.5763 1.5502L1.5433 12.5692C-0.5347 14.6472 -0.5077 16.7942 1.5843 18.8862ZM3.5943 17.1082C2.6913 16.1922 2.6503 15.2492 3.6073 14.3062L14.3133 3.6012C15.2563 2.6572 16.1863 2.6712 17.1023 3.5872L27.8343 14.3192C28.7363 15.2352 28.7643 16.1792 27.8203 17.1222L17.1153 27.8272C16.1723 28.7712 15.2153 28.7432 14.3133 27.8412ZM14.2583 22.2082C14.7503 22.2082 15.1743 21.9622 15.4613 21.5242L21.5723 11.9682C21.7503 11.6812 21.9143 11.3532 21.9143 11.0382C21.9143 10.3682 21.3133 9.9172 20.6703 9.9172C20.2603 9.9172 19.8913 10.1362 19.6043 10.6012L14.2033 19.2692L11.6603 16.0282C11.3323 15.6052 11.0043 15.4542 10.5943 15.4542C9.9243 15.4542 9.4043 15.9872 9.4043 16.6712C9.4043 16.9992 9.5273 17.3002 9.7603 17.5872L12.9863 21.5242C13.3553 22.0032 13.7523 22.2082 14.2583 22.2082Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.006281888857306 31.006281888857306"
          className={className}
        >
          <path
            d="              M1.5328 18.5268L12.4838 29.4788C14.5078 31.5018 16.5038 31.5158 18.5138 29.5198L29.5198 18.4998C31.5158 16.5038 31.5018 14.4938 29.4788 12.4708L18.5408 1.5328C16.5178 -0.4902 14.5218 -0.5182 12.5118 1.4918L1.4918 12.4978C-0.5172 14.5078 -0.4902 16.5038 1.5328 18.5268ZM3.1188 17.0098C2.1488 16.0248 2.1208 14.9998 3.1328 13.9878L13.9878 3.1328C14.9998 2.1208 16.0258 2.1348 17.0098 3.1188L27.8928 14.0018C28.8628 14.9728 28.8908 16.0118 27.8788 17.0228L17.0238 27.8788C16.0118 28.8908 14.9588 28.8628 14.0018 27.9058ZM14.0288 21.9998C14.4808 21.9998 14.8628 21.7808 15.1228 21.3568L21.3848 11.5268C21.5348 11.2538 21.7128 10.9528 21.7128 10.6518C21.7128 10.0368 21.1658 9.6408 20.5918 9.6408C20.2358 9.6408 19.8948 9.8588 19.6488 10.2558L13.9748 19.3608L11.2678 15.8748C10.9528 15.4378 10.6388 15.3278 10.2698 15.3278C9.6678 15.3278 9.2168 15.8068 9.2168 16.4078C9.2168 16.7088 9.3258 16.9958 9.5308 17.2558L12.8538 21.3568C13.2088 21.8088 13.5648 21.9998 14.0288 21.9998Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.751323286399 31.75642136606251"
          className={className}
        >
          <path
            d="              M1.613 19.1453L12.606 30.1383C14.752 32.2843 17.008 32.2983 19.127 30.1653L30.16 19.1323C32.293 16.9993 32.279 14.7433 30.133 12.5973L19.154 1.6183C17.008 -0.5277 14.752 -0.5417 12.619 1.5913L1.586 12.6243C-0.547 14.7573 -0.519 17.0133 1.613 19.1453ZM3.951 17.1903C3.104 16.3293 3.076 15.4543 3.965 14.5653L14.561 3.9703C15.449 3.0673 16.324 3.0953 17.186 3.9563L27.795 14.5653C28.643 15.4273 28.684 16.3023 27.781 17.1903L17.186 27.7863C16.297 28.6753 15.422 28.6473 14.561 27.8003ZM14.438 22.3863C14.957 22.3863 15.408 22.1123 15.709 21.6473L21.725 12.3103C21.916 12.0093 22.08 11.6673 22.08 11.3533C22.08 10.6143 21.424 10.1223 20.727 10.1223C20.275 10.1223 19.879 10.3683 19.578 10.8603L14.383 19.2003L11.963 16.1513C11.621 15.7283 11.279 15.5633 10.856 15.5633C10.131 15.5633 9.557 16.1383 9.557 16.8763C9.557 17.2183 9.68 17.5323 9.94 17.8473L13.084 21.6613C13.481 22.1403 13.891 22.3863 14.438 22.3863Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.692099416880385 29.68679306998282"
          className={className}
        >
          <path
            d="              M1.299 17.4519L12.25 28.4029C13.973 30.1259 15.777 30.0989 17.459 28.4169L28.397 17.4389C30.092 15.7569 30.147 13.9519 28.424 12.2299L17.486 1.2919C15.75 -0.4441 13.973 -0.4171 12.25 1.2919L1.285 12.2429C-0.437 13.9519 -0.424 15.7299 1.299 17.4519ZM2.01 16.7689C0.766 15.5239 0.766 14.1849 2.024 12.9409L12.92 2.0299C14.191 0.7729 15.504 0.7729 16.762 2.0169L27.658 12.9269C28.889 14.1439 28.93 15.5239 27.672 16.7689L16.762 27.6649C15.504 28.9229 14.15 28.8959 12.934 27.6789ZM13.385 21.3349C13.59 21.3349 13.754 21.2259 13.891 21.0619L21.055 9.9459C21.109 9.8369 21.178 9.6869 21.178 9.5769C21.178 9.3039 20.932 9.0849 20.672 9.0849C20.494 9.0849 20.33 9.1939 20.207 9.3719L13.357 20.0359L9.598 15.6199C9.461 15.4419 9.311 15.3739 9.133 15.3739C8.859 15.3739 8.627 15.5929 8.627 15.8799C8.627 16.0299 8.695 16.1669 8.791 16.3039L12.865 21.0619C13.029 21.2529 13.166 21.3349 13.385 21.3349Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.311055944855042 29.304089189140242"
          className={className}
        >
          <path
            d="              M1.2309 17.1376L12.1819 28.0886C13.8219 29.7296 15.5589 29.6886 17.1579 28.0886L28.0819 17.1376C29.6819 15.5386 29.7499 13.8016 28.1089 12.1616L17.1719 1.2236C15.5179 -0.4304 13.8219 -0.3894 12.1819 1.2376L1.2309 12.1616C-0.4101 13.8016 -0.4101 15.4976 1.2309 17.1376ZM1.6949 16.7006C0.3559 15.3876 0.3829 13.9526 1.6949 12.6256L12.6189 1.7026C13.9449 0.3756 15.3539 0.3756 16.6799 1.7026L27.5899 12.6126C28.8889 13.9116 28.9429 15.3876 27.6169 16.7006L16.6799 27.6106C15.3539 28.9366 13.9179 28.9096 12.6189 27.6106ZM13.2069 21.1436C13.3299 21.1436 13.4399 21.0756 13.5349 20.9796L20.9589 9.4956C20.9859 9.4266 21.0269 9.3316 21.0269 9.2626C21.0269 9.0986 20.8499 8.9206 20.6859 8.9206C20.5759 8.9206 20.4529 9.0166 20.3709 9.1126L13.1799 20.2276L9.1189 15.5516C9.0239 15.4426 8.9279 15.4016 8.7909 15.4016C8.6269 15.4016 8.4629 15.5246 8.4629 15.7296C8.4629 15.8386 8.5039 15.9346 8.5719 16.0306L12.8649 20.9796C12.9749 21.0886 13.0569 21.1436 13.2069 21.1436Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

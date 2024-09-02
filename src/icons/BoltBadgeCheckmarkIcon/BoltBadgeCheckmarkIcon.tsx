import { IconProps } from "../../types"

export default function BoltBadgeCheckmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 34.62517150526324"
          className={className}
        >
          <path
            d="              M0 19.5999C0 20.3379 0.574 20.8579 1.326 20.8579H9.502L5.578 31.9589C4.922 33.8599 6.836 34.8299 8.053 33.3129L11.348 29.2389C11.197 28.5819 11.115 27.9259 11.115 27.1599C11.115 26.3539 11.238 25.3149 11.498 24.4809L10.309 25.8889L14.123 17.8909H5.346L12.154 8.9899L8.736 16.1679H17.514L15.039 19.4079C16.652 18.2459 18.525 17.4939 20.836 17.4939L22.381 15.5939C22.682 15.2249 22.832 14.8689 22.832 14.4729C22.832 13.7209 22.258 13.2009 21.506 13.2009H13.33L17.254 2.0999C17.91 0.1989 16.01 -0.7711 14.779 0.7459L0.451 18.4789C0.15 18.8339 0 19.2029 0 19.5999ZM20.795 34.6249C24.883 34.6249 28.246 31.2209 28.246 27.1599C28.246 23.0999 24.883 19.7229 20.795 19.7229C16.721 19.7229 13.344 23.0999 13.344 27.1599C13.344 31.2349 16.721 34.6249 20.795 34.6249ZM20.166 31.2889C19.742 31.2889 19.277 31.1799 18.963 30.8519L16.775 28.4999C16.502 28.1989 16.27 27.8439 16.27 27.4199C16.27 26.4079 17.062 25.9159 17.801 25.9159C18.238 25.9159 18.607 26.0259 18.867 26.3539L20.016 27.7209L22.764 23.9469C23.064 23.5369 23.516 23.2909 24.008 23.2909C24.855 23.2909 25.512 23.9609 25.512 24.7949C25.512 25.0409 25.443 25.3689 25.252 25.6019L21.369 30.7559C21.109 31.0839 20.645 31.2889 20.166 31.2889Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.93359375 32.732855817655576"
          className={className}
        >
          <path
            d="              M-0.0004 18.5003C-0.0004 19.1433 0.4786 19.5943 1.1486 19.5943H9.1056L5.0996 30.4633C4.4976 32.1173 6.2066 32.9923 7.2596 31.6393L10.6776 27.3463C10.5546 26.7583 10.4866 26.1703 10.4866 25.5273C10.4866 24.7623 10.5956 23.9003 10.8286 23.1623L9.2146 25.1453L12.9886 17.0923H4.3746L11.6486 7.5083L8.0526 15.2053H16.7346L14.7246 17.8163C16.0646 16.9143 17.6226 16.3403 19.4276 16.2993L20.6446 14.7953C20.9046 14.4673 21.0406 14.1523 21.0406 13.7973C21.0406 13.1683 20.5486 12.7033 19.8926 12.7033H11.9356L15.9416 1.8343C16.5426 0.1803 14.8336 -0.6817 13.7676 0.6583L0.3966 17.5023C0.1366 17.8303 -0.0004 18.1583 -0.0004 18.5003ZM19.7426 32.7333C23.6526 32.7333 26.9336 29.4513 26.9336 25.5273C26.9336 21.5903 23.6796 18.3363 19.7426 18.3363C15.7906 18.3363 12.5376 21.5903 12.5376 25.5273C12.5376 29.4653 15.7906 32.7333 19.7426 32.7333ZM19.0036 29.4653C18.6756 29.4653 18.3066 29.3563 18.0606 29.0963L15.8046 26.6493C15.5996 26.4163 15.4496 26.1153 15.4496 25.8013C15.4496 25.0493 16.0236 24.6253 16.6386 24.6253C16.9946 24.6253 17.2946 24.7483 17.4996 24.9813L18.9086 26.5673L21.9566 22.3833C22.1756 22.0553 22.5316 21.8633 22.9416 21.8633C23.5836 21.8633 24.1176 22.3833 24.1176 23.0393C24.1176 23.2443 24.0486 23.4903 23.8986 23.6953L19.9606 29.0273C19.7696 29.3013 19.3866 29.4653 19.0036 29.4653Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.64453125 33.730990508202815"
          className={className}
        >
          <path
            d="              M0 19.0883C0 19.7723 0.533 20.2643 1.258 20.2643H9.324L5.359 31.2563C4.73 33.0473 6.535 33.9633 7.684 32.5283L11.047 28.3443C10.897 27.7293 10.828 27.1003 10.828 26.3893C10.828 25.6103 10.938 24.6533 11.184 23.8603L9.803 25.5283L13.59 17.5163H4.895L11.922 8.2873L8.422 15.7113H17.158L14.902 18.6643C16.379 17.6123 18.115 16.9553 20.18 16.9283L21.574 15.2193C21.848 14.8643 21.998 14.5223 21.998 14.1533C21.998 13.4553 21.465 12.9633 20.754 12.9633H12.688L16.639 1.9713C17.268 0.1943 15.463 -0.7357 14.314 0.7133L0.438 18.0223C0.15 18.3643 0 18.7053 0 19.0883ZM20.303 33.7313C24.309 33.7313 27.645 30.3953 27.645 26.3893C27.645 22.3833 24.322 19.0743 20.303 19.0743C16.283 19.0743 12.975 22.3833 12.975 26.3893C12.975 30.3953 16.283 33.7313 20.303 33.7313ZM19.633 30.4223C19.25 30.4223 18.826 30.3263 18.553 30.0263L16.324 27.6333C16.078 27.3603 15.887 27.0183 15.887 26.6623C15.887 25.7603 16.584 25.3093 17.268 25.3093C17.664 25.3093 17.992 25.4183 18.238 25.7053L19.51 27.1823L22.381 23.2033C22.654 22.8343 23.064 22.6153 23.516 22.6153C24.268 22.6153 24.869 23.2173 24.869 23.9693C24.869 24.1883 24.801 24.4893 24.623 24.7073L20.713 29.9443C20.48 30.2443 20.057 30.4223 19.633 30.4223Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.5546875 30.204128692357386"
          className={className}
        >
          <path
            d="              M0.0005 16.9834C0.0005 17.3664 0.2875 17.6674 0.7385 17.6674H8.5445L4.4025 28.5084C3.9645 29.6434 5.1405 30.2314 5.8515 29.3014L9.4745 24.6804C9.4065 24.2564 9.3655 23.8334 9.3655 23.4094C9.3655 22.9034 9.4335 22.3974 9.5565 21.9324L7.0545 25.1724L10.9515 16.0944H2.6385L11.4165 4.6104L7.5195 13.6744H15.9275L14.2055 15.8894C15.0395 15.4384 15.9685 15.1244 16.9665 15.0554L18.1835 13.5104C18.3885 13.2644 18.4985 13.0454 18.4985 12.7864C18.4985 12.4034 18.2105 12.0884 17.7465 12.0884H9.9535L14.0825 1.2474C14.5195 0.1124 13.3435 -0.4616 12.6325 0.4544L0.3005 16.2584C0.0955 16.5044 0.0005 16.7234 0.0005 16.9834ZM17.7465 30.2044C21.4515 30.2044 24.5545 27.1284 24.5545 23.4094C24.5545 19.6764 21.4785 16.6004 17.7465 16.6004C14.0275 16.6004 10.9515 19.6764 10.9515 23.4094C10.9515 27.1414 14.0275 30.2044 17.7465 30.2044ZM16.9125 26.9914C16.7075 26.9914 16.4745 26.9094 16.3105 26.7314L14.0415 24.2434C13.9045 24.0924 13.8495 23.8744 13.8495 23.6964C13.8495 23.2724 14.1775 22.9584 14.5875 22.9584C14.8475 22.9584 15.0395 23.0944 15.1625 23.2314L16.8715 25.0634L20.2075 20.4564C20.3435 20.2644 20.5625 20.1414 20.8355 20.1414C21.2325 20.1414 21.5745 20.4564 21.5745 20.8664C21.5745 21.0164 21.5055 21.1804 21.4105 21.3314L17.5275 26.7044C17.3905 26.8814 17.1715 26.9914 16.9125 26.9914Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.11328125 31.517064497813415"
          className={className}
        >
          <path
            d="              M0.0002 17.8178C0.0002 18.3788 0.4372 18.8018 1.0392 18.8018H8.8592L4.7992 29.5078C4.2382 31.0108 5.8102 31.8038 6.7672 30.5878L10.2672 26.1308C10.1582 25.5968 10.1032 25.0498 10.1032 24.4758C10.1032 23.7518 10.1992 22.9998 10.4042 22.3158L8.5042 24.7498L12.2632 16.6008H3.7602L11.3202 6.5928L7.6292 14.5908H16.2562L14.5332 16.8058C15.7092 16.0818 17.0492 15.6028 18.5532 15.5348L19.5372 14.2908C19.7832 13.9898 19.9062 13.7028 19.9062 13.3748C19.9062 12.7998 19.4692 12.3898 18.8672 12.3898H11.0602L15.1072 1.6718C15.6682 0.1678 14.0952 -0.6252 13.1382 0.6048L0.3832 16.8878C0.1362 17.2028 0.0002 17.4898 0.0002 17.8178ZM19.0722 31.5168C22.8862 31.5168 26.1132 28.3178 26.1132 24.4758C26.1132 20.6208 22.9282 17.4488 19.0722 17.4488C15.2172 17.4488 12.0312 20.6208 12.0312 24.4758C12.0312 28.3448 15.2172 31.5168 19.0722 31.5168ZM18.2792 28.2908C18.0192 28.2908 17.7052 28.1948 17.5002 27.9758L15.2032 25.4738C15.0252 25.2688 14.9292 25.0088 14.9292 24.7768C14.9292 24.1888 15.3812 23.7928 15.9002 23.7928C16.2152 23.7928 16.4612 23.9288 16.6382 24.1068L18.2242 25.8428L21.4512 21.3728C21.6292 21.1128 21.9162 20.9488 22.2582 20.9488C22.7912 20.9488 23.2422 21.3728 23.2422 21.9198C23.2422 22.0838 23.1742 22.3018 23.0372 22.4798L19.0862 27.9348C18.9082 28.1538 18.6072 28.2908 18.2792 28.2908Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.634765625 30.832942358291703"
          className={className}
        >
          <path
            d="              M-0.0001 17.4208C-0.0001 17.9538 0.4099 18.3508 0.9849 18.3508H8.7089L4.6349 28.9738C4.0879 30.3818 5.5919 31.1478 6.4809 29.9848L10.0219 25.4458C9.9259 24.9408 9.8849 24.4208 9.8849 23.8878C9.8849 23.1908 9.9809 22.4928 10.1719 21.8368L8.0939 24.5438L11.8669 16.3138H3.4179L11.1289 6.0728L7.3969 14.2488H15.9689L14.4239 16.2448C15.5039 15.6028 16.7349 15.1918 18.0469 15.1098L18.9079 14.0028C19.1409 13.7158 19.2639 13.4418 19.2639 13.1278C19.2639 12.6088 18.8539 12.2118 18.2789 12.2118H10.5549L14.6289 1.5748C15.1759 0.1668 13.6719 -0.5992 12.7829 0.5768L0.3559 16.5458C0.1229 16.8468 -0.0001 17.1198 -0.0001 17.4208ZM18.6899 30.8328C22.4489 30.8328 25.6349 27.6888 25.6349 23.8878C25.6349 20.0868 22.5039 16.9418 18.6899 16.9418C14.8889 16.9418 11.7439 20.0868 11.7439 23.8878C11.7439 27.7158 14.8889 30.8328 18.6899 30.8328ZM17.8559 27.6338C17.6369 27.6338 17.3499 27.5378 17.1719 27.3468L14.8609 24.8038C14.6969 24.6258 14.6289 24.3798 14.6289 24.1888C14.6289 23.6958 15.0119 23.3268 15.4899 23.3268C15.7769 23.3268 15.9959 23.4638 16.1469 23.6278L17.8149 25.4328L21.1509 20.8118C21.3149 20.5928 21.5609 20.4288 21.8749 20.4288C22.3399 20.4288 22.7359 20.7978 22.7359 21.2758C22.7359 21.4408 22.6679 21.6178 22.5449 21.7958L18.5799 27.3188C18.4299 27.5108 18.1559 27.6338 17.8559 27.6338Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.46875 32.048189910007984"
          className={className}
        >
          <path
            d="              M-0.0001 18.1168C-0.0001 18.7048 0.4649 19.1418 1.0939 19.1418H8.9689L4.9359 29.9288C4.3609 31.4878 5.9879 32.3218 6.9859 31.0368L10.4449 26.6478C10.3359 26.1008 10.2809 25.5408 10.2809 24.9388C10.2809 24.2008 10.3769 23.3938 10.5959 22.6828L8.8319 24.9118L12.5779 16.8178H4.0329L11.4709 6.9878L7.8199 14.8628H16.4749L14.6289 17.2548C15.8729 16.4488 17.3089 15.9288 18.9359 15.8608L20.0159 14.5068C20.2749 14.1928 20.4119 13.8918 20.4119 13.5638C20.4119 12.9618 19.9469 12.5248 19.3179 12.5248H11.4429L15.4769 1.7508C16.0509 0.1788 14.4239 -0.6552 13.4259 0.6298L0.3969 17.1598C0.1369 17.4738 -0.0001 17.7748 -0.0001 18.1168ZM19.3589 32.0478C23.2289 32.0478 26.4689 28.8078 26.4689 24.9388C26.4689 21.0428 23.2559 17.8298 19.3589 17.8298C15.4769 17.8298 12.2639 21.0428 12.2639 24.9388C12.2639 28.8348 15.4769 32.0478 19.3589 32.0478ZM18.5939 28.7938C18.3069 28.7938 17.9649 28.6988 17.7459 28.4658L15.4769 25.9918C15.2849 25.7728 15.1619 25.4858 15.1619 25.2118C15.1619 24.5558 15.6679 24.1598 16.2289 24.1598C16.5569 24.1598 16.8299 24.2828 17.0219 24.4878L18.5249 26.1688L21.6699 21.8078C21.8749 21.5208 22.1899 21.3428 22.5589 21.3428C23.1469 21.3428 23.6249 21.8078 23.6249 22.3958C23.6249 22.5868 23.5569 22.8198 23.4199 23.0108L19.4689 28.4118C19.2909 28.6438 18.9489 28.7938 18.5939 28.7938Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.119140625 29.3563208699582"
          className={className}
        >
          <path
            d="              M-0.0003 16.3957C-0.0003 16.5867 0.1227 16.7917 0.4377 16.7917H8.3267L4.1017 27.9067C3.8147 28.6727 4.5527 29.0147 5.0317 28.4127L8.7497 23.6687C8.7087 23.3677 8.6957 23.0677 8.6957 22.7667C8.6957 22.5337 8.7087 22.2877 8.7497 22.0687L5.8107 25.8567L9.7617 15.8077H1.6137L11.6617 2.8597L7.7107 12.9227H15.8867L13.9177 15.4387C14.4237 15.2197 14.9707 15.0557 15.5447 15.0007L17.2407 12.8547C17.3907 12.6627 17.4727 12.5127 17.4727 12.3207C17.4727 12.1297 17.3497 11.9387 17.0347 11.9387H9.1467L13.3707 0.8097C13.6717 0.0437 12.9197 -0.2983 12.4417 0.3177L0.2457 15.8617C0.0817 16.0537 -0.0003 16.2037 -0.0003 16.3957ZM16.5157 29.3567C20.1247 29.3567 23.1187 26.3897 23.1187 22.7667C23.1187 19.1297 20.1387 16.1627 16.5157 16.1627C12.9067 16.1627 9.9117 19.1437 9.9117 22.7667C9.9117 26.3897 12.9067 29.3567 16.5157 29.3567ZM15.6677 26.1437C15.4907 26.1437 15.3127 26.0617 15.1757 25.9107L12.9747 23.5047C12.8657 23.3677 12.8107 23.2037 12.8107 23.0537C12.8107 22.7257 13.0707 22.4797 13.3987 22.4797C13.6307 22.4797 13.7677 22.6027 13.8767 22.7117L15.6267 24.5847L18.9627 20.0047C19.0727 19.8407 19.2497 19.7447 19.4547 19.7447C19.7697 19.7447 20.0427 20.0047 20.0427 20.3187C20.0427 20.4697 19.9887 20.5927 19.9067 20.7017L16.1467 25.8977C16.0367 26.0477 15.8727 26.1437 15.6677 26.1437Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.39453125 28.924508540894745"
          className={className}
        >
          <path
            d="              M0.0003 16.1C0.0003 16.196 0.0543 16.333 0.2873 16.333H8.2173L3.9513 27.598C3.7323 28.173 4.2523 28.391 4.6073 27.954L8.3813 23.141C8.3673 22.909 8.3533 22.663 8.3533 22.43C8.3533 22.335 8.3533 22.225 8.3403 22.13L5.1953 26.163L9.1463 15.663H1.0933L11.7583 2.018L7.8063 12.532H15.8593L13.7813 15.198C14.1093 15.102 14.4653 15.02 14.8343 14.966L16.7483 12.518C16.8843 12.368 16.9533 12.245 16.9533 12.094C16.9533 11.999 16.9123 11.862 16.6793 11.862H8.7503L13.0153 0.596C13.2343 0.008 12.7013 -0.21 12.3453 0.241L0.2053 15.663C0.0683 15.827 0.0003 15.95 0.0003 16.1ZM15.8863 28.925C19.4413 28.925 22.3943 25.999 22.3943 22.43C22.3943 18.862 19.4683 15.923 15.8863 15.923C12.3323 15.923 9.3923 18.876 9.3923 22.43C9.3923 25.999 12.3323 28.925 15.8863 28.925ZM15.0253 25.698C14.8753 25.698 14.7243 25.63 14.6013 25.493L12.4413 23.128C12.3323 23.005 12.2773 22.868 12.2773 22.731C12.2773 22.43 12.5093 22.225 12.7973 22.225C13.0023 22.225 13.1253 22.348 13.2343 22.458L14.9983 24.344L18.3203 19.764C18.4293 19.628 18.5803 19.546 18.7583 19.546C19.0313 19.546 19.2633 19.764 19.2633 20.038C19.2633 20.188 19.2093 20.284 19.1403 20.393L15.4353 25.479C15.3403 25.616 15.2173 25.698 15.0253 25.698Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
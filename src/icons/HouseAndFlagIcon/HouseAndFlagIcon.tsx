import { IconProps } from "../../types"

export default function HouseAndFlagIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.751953125 32.580078125"
          className={className}
        >
          <path
            d="              M1.7087 32.58H45.6507C46.5797 32.58 47.3457 31.814 47.3457 30.871C47.3457 29.941 46.5797 29.176 45.6507 29.176H41.6307V8.75C41.7127 8.75 41.7677 8.75 41.8357 8.75C43.5177 8.75 44.8577 9.789 46.8127 9.789C47.7287 9.789 48.1797 9.693 48.7677 9.447C49.4647 9.16 49.7517 8.613 49.7517 7.834V1.887C49.7517 1.23 49.3277 0.82 48.6307 0.82C48.1797 0.82 47.6467 1.08 46.7577 1.08C44.8707 1.08 43.4767 0 41.1797 0C40.2637 0 39.8127 0.082 39.2387 0.342C38.5957 0.643 38.2267 1.189 38.2267 1.941V29.176H31.8687C31.8967 28.971 31.9097 28.752 31.9097 28.533V17.117L32.3337 17.336C35.6837 19.1 37.8027 14.615 34.8357 13.002L20.6307 5.291C19.0037 4.402 17.5547 4.402 15.9277 5.291L1.7227 13.002C-1.2573 14.615 0.8747 19.1 4.2247 17.336L4.5527 17.158V28.533C4.5527 28.752 4.5667 28.971 4.5797 29.176H1.7087C0.7657 29.176 -0.0003 29.941 -0.0003 30.871C-0.0003 31.814 0.7657 32.58 1.7087 32.58ZM22.5317 20.275C22.5317 19.605 22.1077 19.168 21.4237 19.168H15.1617C14.4927 19.168 14.0407 19.605 14.0407 20.275V27.74H10.5817C9.8297 27.74 9.3927 27.303 9.3927 26.551V14.602L17.9647 10.076C18.1697 9.967 18.4157 9.967 18.6207 10.076L27.0707 14.547V26.551C27.0707 27.303 26.6327 27.74 25.8807 27.74H22.5317Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46.59375 31.3359375"
          className={className}
        >
          <path
            d="              M1.3813 31.3357H42.4103C43.1623 31.3357 43.7773 30.7067 43.7773 29.9547C43.7773 29.2027 43.1623 28.5737 42.4103 28.5737H38.1443V8.3807C38.2543 8.3667 38.3633 8.3537 38.5133 8.3537C40.4553 8.3537 41.8083 9.4197 43.8593 9.4197C44.7893 9.4197 45.1993 9.3237 45.7323 9.0917C46.3473 8.8187 46.5933 8.3667 46.5933 7.6977V1.6817C46.5933 1.1617 46.2933 0.8337 45.6913 0.8337C45.2813 0.8337 44.7483 1.0937 43.8043 1.0937C41.8083 1.0937 40.4143 -0.0003 38.1443 -0.0003C37.2153 -0.0003 36.7913 0.0957 36.2853 0.3277C35.7113 0.5877 35.3963 1.0667 35.3963 1.7087V28.5737H29.2443C29.2853 28.3557 29.2993 28.1097 29.2993 27.8637V15.8187L30.3923 16.3927C32.8533 17.6777 34.3303 14.4917 32.2113 13.3437L18.6073 6.0837C17.2403 5.3457 16.0643 5.3457 14.7113 6.0837L1.0933 13.3437C-1.0117 14.4917 0.4513 17.6777 2.9123 16.3927L3.9653 15.8457V27.8637C3.9653 28.1097 3.9923 28.3557 4.0193 28.5737H1.3813C0.6293 28.5737 0.0003 29.2027 0.0003 29.9547C0.0003 30.7067 0.6293 31.3357 1.3813 31.3357ZM20.7813 19.7827C20.7813 19.1407 20.3573 18.7307 19.7283 18.7307H13.6033C12.9613 18.7307 12.5503 19.1407 12.5503 19.7827V27.8637H8.6953C7.8883 27.8637 7.4513 27.3987 7.4513 26.6057V14.0407L16.2563 9.4607C16.5153 9.3237 16.8023 9.3237 17.0623 9.4607L25.8263 14.0137V26.6057C25.8263 27.3987 25.3753 27.8637 24.5823 27.8637H20.7813Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.248046875 31.978515625"
          className={className}
        >
          <path
            d="              M1.5447 31.9782H44.1057C44.9527 31.9782 45.6507 31.2812 45.6507 30.4332C45.6507 29.5862 44.9527 28.8882 44.1057 28.8882H39.9767V8.5722C40.0727 8.5582 40.1547 8.5582 40.2637 8.5582C42.0687 8.5582 43.4087 9.5972 45.4047 9.5972C46.3337 9.5972 46.7717 9.5022 47.3187 9.2692C47.9887 8.9962 48.2477 8.4902 48.2477 7.7652V1.7772C48.2477 1.1892 47.8927 0.8062 47.2367 0.8062C46.7987 0.8062 46.2797 1.0802 45.3637 1.0802C43.4217 1.0802 42.0277 0.0002 39.7437 0.0002C38.8147 0.0002 38.3767 0.0822 37.8437 0.3282C37.2147 0.6012 36.8867 1.1212 36.8867 1.8182V28.8882H30.6247C30.6527 28.6702 30.6657 28.4372 30.6657 28.2052V16.4882L31.4047 16.8712C34.3437 18.4162 36.1617 14.5472 33.5917 13.1522L19.6607 5.6462C18.1697 4.8402 16.8437 4.8402 15.3397 5.6462L1.4217 13.1522C-1.1483 14.5472 0.6697 18.4162 3.5957 16.8712L4.2657 16.5292V28.2052C4.2657 28.4372 4.2797 28.6702 4.3067 28.8882H1.5447C0.6977 28.8882 -0.0003 29.5862 -0.0003 30.4332C-0.0003 31.2812 0.6977 31.9782 1.5447 31.9782ZM21.6977 20.0432C21.6977 19.3732 21.2737 18.9492 20.6177 18.9492H14.4237C13.7677 18.9492 13.3297 19.3732 13.3297 20.0432V27.7812H9.6797C8.9007 27.7812 8.4627 27.3442 8.4627 26.5642V14.3282L17.1587 9.7752C17.3767 9.6522 17.6507 9.6522 17.8827 9.7752L26.4687 14.2872V26.5642C26.4687 27.3442 26.0317 27.7812 25.2517 27.7812H21.6977Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.80575409057882 29.189453125"
          className={className}
        >
          <path
            d="              M1.0498 29.1893H37.5398C37.9908 29.1893 38.3608 28.8203 38.3608 28.3693C38.3608 27.9183 37.9908 27.5623 37.5398 27.5623H33.3158V7.3553C33.4928 7.3143 33.7398 7.2733 34.0808 7.2733C36.1588 7.2733 37.4448 8.2983 39.4818 8.2983C40.3158 8.2983 40.7118 8.2163 41.1498 8.0113C41.5868 7.7933 41.8058 7.4923 41.8058 7.0273V1.3263C41.8058 0.9983 41.6418 0.7793 41.2318 0.7793C40.9038 0.7793 40.3838 1.0393 39.4268 1.0393C37.4168 1.0393 36.1178 0.0003 34.0268 0.0003C33.1648 0.0003 32.7818 0.1093 32.3718 0.2873C31.9208 0.4653 31.6888 0.8063 31.6888 1.2443V27.5623H25.7548C25.8648 27.2343 25.9188 26.8793 25.9188 26.4683V13.7263L27.9968 14.7933C29.1998 15.4083 29.8288 13.9453 28.8448 13.4253L16.0068 6.7403C15.0638 6.2483 14.2708 6.2483 13.3138 6.7543L0.4758 13.4253C-0.4952 13.9453 0.1338 15.4083 1.3368 14.7933L3.4148 13.7263V26.4683C3.4148 26.8793 3.4698 27.2343 3.5788 27.5623H1.0498C0.6128 27.5623 0.2428 27.9183 0.2428 28.3693C0.2428 28.8203 0.6128 29.1893 1.0498 29.1893ZM18.5498 18.7983C18.5498 18.2523 18.1808 17.8963 17.6338 17.8963H11.6728C11.1258 17.8963 10.7568 18.2523 10.7568 18.7983V27.5623H6.5188C5.5338 27.5623 5.0418 27.0703 5.0418 26.0723V12.8923L14.1338 8.2573C14.4758 8.0803 14.8308 8.0803 15.1998 8.2573L24.2918 12.9063V26.0723C24.2918 27.0703 23.7998 27.5623 22.8158 27.5623H18.5498Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.63681394251358 30.529296875"
          className={className}
        >
          <path
            d="              M1.2421 30.5293H40.3851C41.0271 30.5293 41.5471 29.9963 41.5471 29.3533C41.5471 28.7243 41.0271 28.1913 40.3851 28.1913H35.9691V8.1483C36.0921 8.1213 36.2421 8.1073 36.4341 8.1073C38.5531 8.1073 39.9201 9.1743 42.0121 9.1743C42.9551 9.1743 43.3521 9.0783 43.8441 8.8593C44.3911 8.6133 44.6371 8.2173 44.6371 7.6013V1.5452C44.6371 1.1212 44.4181 0.8343 43.8711 0.8343C43.4881 0.8343 42.9551 1.0933 41.9711 1.0933C39.9061 1.0933 38.4981 0.0003 36.2701 0.0003C35.3121 0.0003 34.9301 0.1092 34.4511 0.3143C33.9181 0.5472 33.6451 0.9703 33.6451 1.5583V28.1913H27.6151C27.6561 27.9593 27.6841 27.6993 27.6841 27.4263V14.9983L29.2151 15.7773C31.1021 16.7613 32.1541 14.4103 30.5821 13.5623L17.3611 6.5763C16.1721 5.9473 15.1741 5.9473 13.9841 6.5763L0.7641 13.5623C-0.8089 14.4103 0.2441 16.7613 2.1311 15.7773L3.6481 14.9983V27.4263C3.6481 27.6993 3.6761 27.9593 3.7171 28.1913H1.2421C0.6001 28.1913 0.0661 28.7243 0.0661 29.3533C0.0661 29.9963 0.6001 30.5293 1.2421 30.5293ZM19.7131 19.4683C19.7131 18.8533 19.3031 18.4573 18.6871 18.4573H12.6581C12.0431 18.4573 11.6461 18.8533 11.6461 19.4683V27.9313H7.5311C6.7111 27.9313 6.2461 27.4673 6.2461 26.6333V13.6723L15.2281 9.0513C15.5021 8.9142 15.8301 8.9142 16.1311 9.0513L25.0861 13.6583V26.6333C25.0861 27.4673 24.6211 27.9313 23.8011 27.9313H19.7131Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.58510384067758 30.091796875"
          className={className}
        >
          <path
            d="              M1.2018 30.0915H39.3058C39.8798 30.0915 40.3448 29.5995 40.3448 29.0255C40.3448 28.4515 39.8798 27.9865 39.3058 27.9865H34.7938V8.0115C34.9308 7.9845 35.0948 7.9705 35.3138 7.9705C37.5288 7.9705 38.9088 9.0505 41.0288 9.0505C41.9718 9.0505 42.3678 8.9555 42.8328 8.7365C43.3528 8.4905 43.5848 8.1345 43.5848 7.5465V1.4765C43.5848 1.1075 43.3938 0.8475 42.8878 0.8475C42.5188 0.8475 41.9858 1.1075 40.9738 1.1075C38.8818 1.1075 37.4738 -0.0005 35.2588 -0.0005C34.3018 -0.0005 33.9188 0.1235 33.4678 0.3145C32.9618 0.5335 32.7018 0.9295 32.7018 1.4765V27.9865H26.7418C26.7958 27.7405 26.8238 27.4665 26.8238 27.1795V14.5335L28.6008 15.4495C30.1728 16.2425 30.9928 14.3555 29.7078 13.6855L16.7198 6.8635C15.6128 6.2895 14.7238 6.2895 13.6298 6.8635L0.6148 13.6855C-0.6432 14.3555 0.1768 16.2425 1.7488 15.4495L3.5268 14.5335V27.1795C3.5268 27.4665 3.5538 27.7405 3.6088 27.9865H1.2018C0.6278 27.9865 0.1498 28.4515 0.1498 29.0255C0.1498 29.5995 0.6278 30.0915 1.2018 30.0915ZM19.1538 19.2915C19.1538 18.6895 18.7568 18.2925 18.1558 18.2925H12.1808C11.5788 18.2925 11.1828 18.6895 11.1828 19.2915V27.9865H6.9308C6.0968 27.9865 5.6318 27.5075 5.6318 26.6465V13.4535L14.6968 8.8325C14.9838 8.6815 15.3388 8.6815 15.6538 8.8325L24.7178 13.4665V26.6465C24.7178 27.5075 24.2528 27.9865 23.4058 27.9865H19.1538Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.4453125 30.87109375"
          className={className}
        >
          <path
            d="              M1.272 30.8713H41.221C41.918 30.8713 42.479 30.2973 42.479 29.6133C42.479 28.9163 41.918 28.3553 41.221 28.3553H36.873V8.2443C36.996 8.2163 37.119 8.2033 37.297 8.2033C39.334 8.2033 40.701 9.2693 42.779 9.2693C43.709 9.2693 44.119 9.1743 44.625 8.9553C45.199 8.6953 45.445 8.2713 45.445 7.6293V1.5993C45.445 1.1343 45.186 0.8343 44.625 0.8343C44.229 0.8343 43.695 1.0933 42.725 1.0933C40.701 1.0933 39.293 0.0003 37.051 0.0003C36.107 0.0003 35.697 0.0953 35.205 0.3143C34.658 0.5603 34.371 1.0113 34.371 1.6133V28.3553H28.287C28.328 28.1233 28.342 27.8633 28.342 27.6033V15.3403L29.695 16.0373C31.828 17.1443 33.059 14.4373 31.254 13.4663L17.869 6.3573C16.598 5.6873 15.531 5.6873 14.26 6.3573L0.875 13.4663C-0.93 14.4373 0.301 17.1443 2.434 16.0373L3.76 15.3533V27.6033C3.76 27.8773 3.773 28.1233 3.814 28.3553H1.272C0.574 28.3553 0 28.9163 0 29.6133C0 30.2973 0.574 30.8713 1.272 30.8713ZM20.139 19.5913C20.139 18.9763 19.729 18.5663 19.1 18.5663H13.043C12.414 18.5663 12.004 18.9763 12.004 19.5913V27.8903H7.998C7.178 27.8903 6.727 27.4393 6.727 26.6053V13.8223L15.641 9.2283C15.9 9.0783 16.215 9.0783 16.502 9.2283L25.361 13.8083V26.6053C25.361 27.4393 24.91 27.8903 24.104 27.8903H20.139Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.45819073518617 28"
          className={className}
        >
          <path
            d="              M0.8628 28.0004H35.2338C35.5068 28.0004 35.7258 27.7814 35.7258 27.5074C35.7258 27.2344 35.5068 27.0154 35.2338 27.0154H31.3648V6.4944C31.5968 6.4394 31.9528 6.3574 32.4578 6.3574C34.3588 6.3574 35.5068 7.3144 37.4208 7.3144C38.1188 7.3144 38.5148 7.2464 38.9248 7.0544C39.2808 6.8634 39.4578 6.6714 39.4578 6.3434V1.1214C39.4578 0.8614 39.3348 0.7104 39.0618 0.7104C38.7748 0.7104 38.2828 0.9574 37.3798 0.9574C35.4938 0.9574 34.3308 0.0004 32.4038 0.0004C31.6518 0.0004 31.2688 0.1094 30.9268 0.2594C30.5578 0.3964 30.3668 0.6424 30.3668 0.9574V27.0154H24.3778C24.6108 26.6194 24.7338 26.1274 24.7338 25.5394V12.6874L27.2078 13.9454C27.9188 14.3004 28.3018 13.4124 27.7138 13.0974L15.0678 6.5764C14.3288 6.1934 13.6868 6.1934 12.9208 6.5894L0.2878 13.0974C-0.2992 13.4124 0.0828 14.3004 0.7938 13.9454L3.2828 12.6734V25.5394C3.2828 26.1274 3.4058 26.6194 3.6378 27.0154H0.8628C0.5888 27.0154 0.3698 27.2344 0.3698 27.5074C0.3698 27.7814 0.5888 28.0004 0.8628 28.0004ZM17.7468 18.1694C17.7468 17.6774 17.4328 17.3634 16.9408 17.3634H11.0068C10.5148 17.3634 10.2008 17.6774 10.2008 18.1694V27.0154H5.9758C4.7998 27.0154 4.2808 26.4824 4.2808 25.3064V12.1684L13.3858 7.5054C13.7958 7.3004 14.1788 7.3004 14.6028 7.5054L23.7358 12.1684V25.3064C23.7358 26.4824 23.2158 27.0154 22.0398 27.0154H17.7468Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.2373230994849 27.3984375"
          className={className}
        >
          <path
            d="              M0.7628 27.3987H34.0398C34.2178 27.3987 34.3678 27.2477 34.3678 27.0567C34.3678 26.8787 34.2178 26.7287 34.0398 26.7287H30.3488V6.0567C30.6218 5.9887 31.0188 5.8927 31.6198 5.8927C33.4388 5.8927 34.5048 6.8087 36.3648 6.8087C36.9928 6.8087 37.3898 6.7407 37.7728 6.5767C38.0868 6.3987 38.2378 6.2477 38.2378 5.9887V1.0257C38.2378 0.7927 38.1418 0.6697 37.9368 0.6697C37.6768 0.6697 37.1848 0.9157 36.3238 0.9157C34.4908 0.9157 33.4108 -0.0003 31.5788 -0.0003C30.8818 -0.0003 30.4988 0.0957 30.1848 0.2457C29.8568 0.3557 29.6788 0.5607 29.6788 0.8067V26.7287H23.5948C23.9498 26.3317 24.1278 25.7717 24.1278 25.0467V12.1407L26.7938 13.5077C27.2588 13.7407 27.5048 13.1387 27.1218 12.9337L14.5848 6.4937C13.9428 6.1797 13.3818 6.1797 12.7118 6.5217L0.1888 12.9337C-0.1942 13.1387 0.0518 13.7407 0.5168 13.5077L3.2098 12.1267V25.0467C3.2098 25.7717 3.3878 26.3317 3.7298 26.7287H0.7628C0.5718 26.7287 0.4208 26.8787 0.4208 27.0567C0.4208 27.2477 0.5718 27.3987 0.7628 27.3987ZM17.3328 17.8417C17.3328 17.3907 17.0318 17.0897 16.5808 17.0897H10.6478C10.1968 17.0897 9.9088 17.3907 9.9088 17.8417V26.7287H5.6848C4.4268 26.7287 3.8798 26.1817 3.8798 24.9237V11.7847L13.0128 7.1227C13.4498 6.8907 13.8328 6.8907 14.2838 7.1227L23.4448 11.7987V24.9237C23.4448 26.1817 22.9108 26.7287 21.6398 26.7287H17.3328Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
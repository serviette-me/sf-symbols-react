import { IconProps } from "../../types"

export default function LightbulbIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.029296875 35.287109375"
          className={className}
        >
          <path
            d="              M-0.0003 9.2968C-0.0003 14.2598 2.8027 16.5158 3.4177 24.5278C3.5137 25.8398 4.4027 26.6328 5.7147 26.6328H14.3007C15.6137 26.6328 16.5017 25.8398 16.5977 24.5278C17.1997 16.5158 20.0297 14.2738 20.0297 9.3108C20.0297 3.9238 15.4627 -0.0002 10.0077 -0.0002C4.5527 -0.0002 -0.0003 3.9098 -0.0003 9.2968ZM3.8687 9.2968C3.8687 6.0428 6.6997 3.8688 10.0077 3.8688C13.3027 3.8828 16.1597 6.0428 16.1597 9.2968C16.1597 12.1678 13.9867 13.3708 13.0427 22.7778H6.9727C6.0297 13.3708 3.8687 12.1678 3.8687 9.2968ZM5.3457 30.7888H14.6567C15.3537 30.7888 15.9007 30.2008 15.9007 29.5718C15.9007 28.9158 15.3537 28.3418 14.6567 28.3418H5.3457C4.6487 28.3418 4.1017 28.9158 4.1017 29.5718C4.1017 30.2008 4.6487 30.7888 5.3457 30.7888ZM10.0077 35.2868C12.3727 35.2868 14.0277 34.1798 14.2047 32.5118H5.7287C5.8927 34.1798 7.6287 35.2868 10.0077 35.2868Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.16796875 33.537109375"
          className={className}
        >
          <path
            d="              M-0.0003 8.8592C-0.0003 13.9592 2.9807 15.7362 3.7187 24.2952C3.7867 25.2112 4.3747 25.7582 5.2907 25.7582H13.8637C14.7797 25.7582 15.3677 25.2112 15.4357 24.2952C16.1737 15.7362 19.1677 13.9722 19.1677 8.8592C19.1677 3.8142 14.8617 0.0002 9.5707 0.0002C4.2927 0.0002 -0.0003 3.8012 -0.0003 8.8592ZM2.9667 8.8592C2.9667 5.3862 6.0017 2.9672 9.5707 2.9672C13.1527 2.9672 16.2017 5.3862 16.2017 8.8592C16.2017 12.2502 13.8087 13.3162 12.7147 22.7912H6.4397C5.3457 13.3162 2.9667 12.2502 2.9667 8.8592ZM5.0857 29.3122H14.0687C14.6427 29.3122 15.0937 28.8342 15.0937 28.3012C15.0937 27.7542 14.6427 27.2892 14.0687 27.2892H5.0857C4.5117 27.2892 4.0607 27.7542 4.0607 28.3012C4.0607 28.8342 4.5117 29.3122 5.0857 29.3122ZM9.5707 33.5372C11.8267 33.5372 13.5347 32.4702 13.6857 30.8442H5.4277C5.5647 32.4702 7.3277 33.5372 9.5707 33.5372Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.619140625 34.453125"
          className={className}
        >
          <path
            d="              M-0.0003 9.0777C-0.0003 14.1097 2.8847 16.1467 3.5547 24.4047C3.6507 25.5387 4.3887 26.2087 5.5097 26.2087H14.0957C15.2167 26.2087 15.9547 25.5387 16.0507 24.4047C16.7207 16.1467 19.6187 14.1227 19.6187 9.0917C19.6187 3.8687 15.1757 -0.0003 9.8027 -0.0003C4.4297 -0.0003 -0.0003 3.8557 -0.0003 9.0777ZM3.4457 9.0777C3.4457 5.7287 6.3707 3.4317 9.8027 3.4317C13.2347 3.4457 16.1737 5.7287 16.1737 9.0777C16.1737 12.2087 13.9047 13.3437 12.8927 22.7777H6.7127C5.7017 13.3437 3.4457 12.2087 3.4457 9.0777ZM5.2227 30.0917H14.3827C15.0257 30.0917 15.5177 29.5447 15.5177 28.9567C15.5177 28.3557 15.0257 27.8357 14.3827 27.8357H5.2227C4.5797 27.8357 4.0877 28.3557 4.0877 28.9567C4.0877 29.5447 4.5797 30.0917 5.2227 30.0917ZM9.8027 34.4527C12.1137 34.4527 13.7947 33.3597 13.9587 31.7187H5.5917C5.7427 33.3597 7.4927 34.4527 9.8027 34.4527Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.923828125 31.30859375"
          className={className}
        >
          <path
            d="              M-0.0003 8.2583C-0.0003 13.2613 3.1037 14.6703 3.9377 24.0213C3.9787 24.4723 4.2247 24.7463 4.7437 24.7463H13.1797C13.6997 24.7463 13.9457 24.4723 13.9867 24.0213C14.8337 14.6703 17.9237 13.2613 17.9237 8.2583C17.9237 3.7183 13.9727 0.0003 8.9687 0.0003C3.9517 0.0003 -0.0003 3.7183 -0.0003 8.2583ZM1.5997 8.2583C1.5997 4.4842 4.9627 1.5993 8.9687 1.5993C12.9607 1.5993 16.3247 4.4842 16.3247 8.2583C16.3247 12.2363 13.6177 13.3983 12.5097 23.1463H5.4277C4.3207 13.3983 1.5997 12.2363 1.5997 8.2583ZM4.7577 27.4673H13.1657C13.5627 27.4673 13.8767 27.1663 13.8767 26.7693C13.8767 26.3733 13.5627 26.0583 13.1657 26.0583H4.7577C4.3617 26.0583 4.0607 26.3733 4.0607 26.7693C4.0607 27.1663 4.3617 27.4673 4.7577 27.4673ZM8.9687 31.3083C11.0747 31.3083 12.7287 30.3103 12.8517 28.7793H5.0857C5.1817 30.3103 6.8497 31.3083 8.9687 31.3083Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.607421875 32.443359375"
          className={className}
        >
          <path
            d="              M-0.0003 8.5864C-0.0003 13.7814 3.0767 15.2574 3.9097 24.1714C3.9647 24.8144 4.3477 25.2114 5.0177 25.2114H13.5897C14.2597 25.2114 14.6427 24.8144 14.6977 24.1714C15.5317 15.2574 18.6077 13.7954 18.6077 8.5864C18.6077 3.7464 14.4787 0.0004 9.2967 0.0004C4.1287 0.0004 -0.0003 3.7464 -0.0003 8.5864ZM2.3927 8.5864C2.3927 4.9764 5.5647 2.3924 9.2967 2.3924C13.0427 2.3924 16.2147 4.9764 16.2147 8.5864C16.2147 12.3184 13.6997 13.3024 12.5097 22.8184H6.0977C4.9087 13.3024 2.3927 12.3184 2.3927 8.5864ZM4.9087 28.3824H13.6997C14.1777 28.3824 14.5747 27.9864 14.5747 27.5074C14.5747 27.0154 14.1777 26.6324 13.6997 26.6324H4.9087C4.4157 26.6324 4.0337 27.0154 4.0337 27.5074C4.0337 27.9864 4.4157 28.3824 4.9087 28.3824ZM9.2967 32.4434C11.4707 32.4434 13.2067 31.3904 13.3437 29.8044H5.2497C5.3597 31.3904 7.1227 32.4434 9.2967 32.4434Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.29296875 31.814453125"
          className={className}
        >
          <path
            d="              M-0.0003 8.4223C-0.0003 13.6723 3.1447 14.9703 4.0197 24.0903C4.0747 24.5823 4.3477 24.8963 4.8677 24.8963H13.4257C13.9587 24.8963 14.2327 24.5823 14.2867 24.0903C15.1617 14.9703 18.2927 13.6723 18.2927 8.4223C18.2927 3.7053 14.2597 0.0003 9.1467 0.0003C4.0337 0.0003 -0.0003 3.7053 -0.0003 8.4223ZM2.0647 8.4223C2.0647 4.7303 5.3047 2.0643 9.1467 2.0643C12.9887 2.0643 16.2287 4.7303 16.2287 8.4223C16.2287 12.3453 13.6307 13.2753 12.4007 22.8323H5.9067C4.6617 13.2753 2.0647 12.3453 2.0647 8.4223ZM4.8267 27.8493H13.4807C13.9317 27.8493 14.2737 27.4943 14.2737 27.0433C14.2737 26.6053 13.9317 26.2503 13.4807 26.2503H4.8267C4.3747 26.2503 4.0197 26.6053 4.0197 27.0433C4.0197 27.4943 4.3747 27.8493 4.8267 27.8493ZM9.1467 31.8143C11.2657 31.8143 13.0297 30.7753 13.1657 29.2033H5.1407C5.2367 30.7753 7.0137 31.8143 9.1467 31.8143Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.853515625 32.908203125"
          className={className}
        >
          <path
            d="              M-0.0003 8.6951C-0.0003 13.8491 3.0347 15.4631 3.8277 24.2131C3.8967 24.9781 4.3617 25.4431 5.1407 25.4431H13.6997C14.4787 25.4431 14.9567 24.9781 15.0117 24.2131C15.8047 15.4631 18.8537 13.8631 18.8537 8.6951C18.8537 3.7731 14.6427 0.0001 9.4197 0.0001C4.1977 0.0001 -0.0003 3.7601 -0.0003 8.6951ZM2.6387 8.6951C2.6387 5.1401 5.7557 2.6251 9.4197 2.6251C13.0977 2.6391 16.2147 5.1401 16.2147 8.6951C16.2147 12.2771 13.7407 13.3031 12.5917 22.8051H6.2477C5.0997 13.3031 2.6387 12.2771 2.6387 8.6951ZM4.9907 28.7791H13.8497C14.3827 28.7791 14.7927 28.3421 14.7927 27.8361C14.7927 27.3301 14.3827 26.9061 13.8497 26.9061H4.9907C4.4567 26.9061 4.0467 27.3301 4.0467 27.8361C4.0467 28.3421 4.4567 28.7791 4.9907 28.7791ZM9.4197 32.9081C11.6207 32.9081 13.3577 31.8421 13.4937 30.2421H5.3187C5.4417 31.8421 7.2187 32.9081 9.4197 32.9081Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.431640625 30.666015625"
          className={className}
        >
          <path
            d="              M-0.0003 8.0392C-0.0003 12.7422 3.0487 14.2872 3.8417 23.9532C3.8687 24.3632 4.0877 24.5822 4.5797 24.5822H12.8517C13.3577 24.5822 13.5627 24.3632 13.6037 23.9532C14.3967 14.2872 17.4317 12.7422 17.4317 8.0392C17.4317 3.7322 13.5897 0.0002 8.7227 0.0002C3.8557 0.0002 -0.0003 3.7322 -0.0003 8.0392ZM0.9847 8.0392C0.9847 4.1702 4.5257 0.9982 8.7227 0.9982C12.9197 0.9982 16.4477 4.1702 16.4477 8.0392C16.4477 12.1132 13.5897 13.5762 12.6467 23.5842H4.7847C3.8557 13.5762 0.9847 12.1132 0.9847 8.0392ZM4.6757 26.9882H12.7557C13.0837 26.9882 13.3437 26.7422 13.3437 26.4142C13.3437 26.0862 13.0837 25.8262 12.7557 25.8262H4.6757C4.3477 25.8262 4.1017 26.0862 4.1017 26.4142C4.1017 26.7422 4.3477 26.9882 4.6757 26.9882ZM8.7227 30.6662C10.8007 30.6662 12.3317 29.6952 12.4277 28.2462H5.0037C5.0997 29.6952 6.6307 30.6662 8.7227 30.6662Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.185546875 30.310546875"
          className={className}
        >
          <path
            d="              M-0.0003 7.9021C-0.0003 12.4551 3.0217 14.0821 3.7867 23.8981C3.8147 24.2811 4.0057 24.4731 4.4977 24.4731H12.6877C13.1797 24.4731 13.3707 24.2811 13.3987 23.8981C14.1637 14.0821 17.1857 12.4551 17.1857 7.9021C17.1857 3.7321 13.3847 0.0001 8.5997 0.0001C3.8007 0.0001 -0.0003 3.7321 -0.0003 7.9021ZM0.6697 7.9021C0.6697 3.9921 4.2927 0.6701 8.5997 0.6701C12.8927 0.6701 16.5157 3.9921 16.5157 7.9021C16.5157 12.0311 13.5767 13.6441 12.7287 23.8031H4.4567C3.6097 13.6441 0.6697 12.0311 0.6697 7.9021ZM4.6347 26.7281H12.5507C12.8377 26.7281 13.0707 26.4961 13.0707 26.2091C13.0707 25.9081 12.8377 25.6891 12.5507 25.6891H4.6347C4.3477 25.6891 4.1157 25.9081 4.1157 26.2091C4.1157 26.4961 4.3477 26.7281 4.6347 26.7281ZM8.5997 30.3101C10.6637 30.3101 12.1267 29.3671 12.2087 27.9451H4.9767C5.0587 29.3671 6.5217 30.3101 8.5997 30.3101Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

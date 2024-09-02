import { IconProps } from "../../types"

export default function BoldIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.279296875 20.794921875"
          className={className}
        >
          <path
            d="              M3.0487 20.795H10.7597C15.3267 20.795 18.2797 18.389 18.2797 14.752C18.2797 12.004 15.9137 9.885 13.0017 9.803V9.693C15.4767 9.379 17.3087 7.574 17.3087 5.195C17.3087 1.955 14.7517 0 10.4317 0H3.0487C1.2027 0 -0.0003 1.08 -0.0003 2.967V17.828C-0.0003 19.728 1.2027 20.795 3.0487 20.795ZM6.8227 8.353V4.115H8.0667C9.6797 4.115 10.6637 4.908 10.6637 6.234C10.6637 7.533 9.6247 8.353 7.9297 8.353ZM6.8227 16.693V11.826H8.2437C10.1997 11.826 11.3477 12.701 11.3477 14.205C11.3477 15.818 10.5407 16.693 8.5317 16.693Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.267578125 20.1796875"
          className={className}
        >
          <path
            d="              M2.6797 20.1793H10.1037C14.4647 20.1793 17.2677 17.8693 17.2677 14.3553C17.2677 11.6483 15.1207 9.6383 12.2777 9.5153V9.4063C14.6427 9.0923 16.3377 7.3283 16.3377 5.0583C16.3377 1.9143 13.8907 0.0003 9.8297 0.0003H2.6797C1.0257 0.0003 -0.0003 0.9703 -0.0003 2.6663V17.5133C-0.0003 19.2093 1.0257 20.1793 2.6797 20.1793ZM5.6597 8.2443V3.6643H7.9707C9.7347 3.6643 10.7867 4.4983 10.7867 5.9063C10.7867 7.3553 9.6387 8.2443 7.7247 8.2443ZM5.6597 16.5433V11.3883H8.0937C10.2677 11.3883 11.5117 12.2913 11.5117 13.9313C11.5117 15.6273 10.4587 16.5433 8.2847 16.5433Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.80078125 20.5078125"
          className={className}
        >
          <path
            d="              M2.8707 20.5073H10.4457C14.9157 20.5073 17.8007 18.1563 17.8007 14.5743C17.8007 11.8403 15.5447 9.7753 12.6597 9.6663V9.5563C15.0797 9.2563 16.8577 7.4653 16.8577 5.1403C16.8577 1.9413 14.3417 0.0003 10.1447 0.0003H2.8707C1.1207 0.0003 -0.0003 1.0393 -0.0003 2.8303V17.6773C-0.0003 19.4963 1.1207 20.5073 2.8707 20.5073ZM6.2757 8.3123V3.8963H8.0117C9.7067 3.8963 10.7187 4.7303 10.7187 6.0843C10.7187 7.4513 9.6387 8.3123 7.8337 8.3123ZM6.2757 16.6253V11.6343H8.1757C10.2407 11.6343 11.4157 12.5093 11.4157 14.0823C11.4157 15.7363 10.4997 16.6253 8.4217 16.6253Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.75 19.619140625"
          className={className}
        >
          <path
            d="              M1.9547 19.6188H8.9277C13.1247 19.6188 15.7497 17.4448 15.7497 14.0548C15.7497 11.3888 13.8227 9.4748 11.0467 9.2698V9.1738C13.2757 8.8458 14.8207 7.0818 14.8207 4.9218C14.8207 1.9008 12.4827 -0.0002 8.7777 -0.0002H1.9547C0.7247 -0.0002 -0.0003 0.7378 -0.0003 2.0098V17.6098C-0.0003 18.8808 0.7247 19.6188 1.9547 19.6188ZM3.8687 8.2718V2.8708H7.6697C9.7617 2.8708 10.9927 3.8278 10.9927 5.4828C10.9927 7.2328 9.6247 8.2718 7.2457 8.2718ZM3.8687 16.7758V10.8418H7.6977C10.3497 10.8418 11.8127 11.8668 11.8127 13.7948C11.8127 15.7228 10.4047 16.7758 7.8337 16.7758Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.611328125 19.783203125"
          className={className}
        >
          <path
            d="              M2.4477 19.7829H9.6797C13.9177 19.7829 16.6117 17.5409 16.6117 14.1099C16.6117 11.4299 14.6157 9.4749 11.8127 9.3379V9.2149C14.1227 8.9139 15.7087 7.1779 15.7087 4.9769C15.7087 1.8869 13.3437 -0.0001 9.4477 -0.0001H2.4477C0.9027 -0.0001 -0.0003 0.9019 -0.0003 2.4749V17.3089C-0.0003 18.8809 0.9027 19.7829 2.4477 19.7829ZM4.9217 8.1619V3.3769H7.9027C9.7617 3.3769 10.8687 4.2379 10.8687 5.7149C10.8687 7.2459 9.6527 8.1619 7.6017 8.1619ZM4.9217 16.4469V11.1149H7.9977C10.3227 11.1149 11.6077 12.0449 11.6077 13.7539C11.6077 15.5039 10.4177 16.4469 8.1207 16.4469Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.255859375 19.55078125"
          className={className}
        >
          <path
            d="              M2.3107 19.5505H9.4337C13.6177 19.5505 16.2557 17.3495 16.2557 13.9725C16.2557 11.3065 14.3277 9.3785 11.5527 9.2285V9.1195C13.8227 8.8045 15.3677 7.0955 15.3677 4.9215C15.3677 1.8735 13.0297 0.0005 9.2427 0.0005H2.3107C0.8477 0.0005 -0.0003 0.8615 -0.0003 2.3655V17.1995C-0.0003 18.6895 0.8477 19.5505 2.3107 19.5505ZM4.5117 8.1215V3.2125H7.8747C9.7887 3.2125 10.9237 4.0875 10.9237 5.5915C10.9237 7.1775 9.6657 8.1215 7.5337 8.1215ZM4.5117 16.3925V10.9645H7.9437C10.3357 10.9645 11.6757 11.8945 11.6757 13.6445C11.6757 15.4355 10.3907 16.3925 8.0387 16.3925Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.8984375 19.947265625"
          className={className}
        >
          <path
            d="              M2.5427 19.9469H9.8577C14.1637 19.9469 16.8987 17.6779 16.8987 14.2189C16.8987 11.5249 14.8337 9.5429 12.0177 9.4059V9.2969C14.3417 8.9829 15.9827 7.2459 15.9827 5.0179C15.9827 1.8999 13.5767 -0.0001 9.6117 -0.0001H2.5427C0.9567 -0.0001 -0.0003 0.9299 -0.0003 2.5569V17.3909C-0.0003 19.0179 0.9567 19.9469 2.5427 19.9469ZM5.2497 8.2029V3.4999H7.9297C9.7477 3.4999 10.8417 4.3609 10.8417 5.7969C10.8417 7.2869 9.6527 8.2029 7.6567 8.2029ZM5.2497 16.4879V11.2379H8.0387C10.2947 11.2379 11.5667 12.1539 11.5667 13.8219C11.5667 15.5589 10.4317 16.4879 8.1897 16.4879Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.080078125 19.6875"
          className={className}
        >
          <path
            d="              M1.4907 19.6872H8.2437C12.4827 19.6872 15.0797 17.5682 15.0797 14.1502C15.0797 11.4842 13.1527 9.5972 10.3907 9.3242V9.2282C12.5367 8.8872 14.0957 7.0552 14.0957 4.8942C14.0957 1.9282 11.7437 0.0002 8.1617 0.0002H1.4907C0.5607 0.0002 -0.0003 0.5882 -0.0003 1.5312V18.1562C-0.0003 19.0992 0.5607 19.6872 1.4907 19.6872ZM3.0077 8.4492V2.4062H7.3827C9.7207 2.4062 11.1017 3.4862 11.1017 5.3322C11.1017 7.3012 9.5567 8.4492 6.8767 8.4492ZM3.0077 17.2812V10.6782H7.3687C10.3767 10.6782 12.0037 11.8262 12.0037 13.9592C12.0037 16.1052 10.4457 17.2812 7.5607 17.2812Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.73828125 19.71484375"
          className={className}
        >
          <path
            d="              M1.2577 19.7148H7.8887C12.1547 19.7148 14.7387 17.6228 14.7387 14.2048C14.7387 11.5388 12.8107 9.6518 10.0627 9.3518V9.2698C12.1677 8.9008 13.7267 7.0408 13.7267 4.8808C13.7267 1.9418 11.3617 -0.0002 7.8477 -0.0002H1.2577C0.4787 -0.0002 -0.0003 0.4918 -0.0003 1.2848V18.4298C-0.0003 19.2228 0.4787 19.7148 1.2577 19.7148ZM2.5707 8.5448V2.1738H7.2457C9.7067 2.1738 11.1567 3.2948 11.1567 5.2498C11.1567 7.3278 9.5297 8.5448 6.6857 8.5448ZM2.5707 17.5408V10.5818H7.1917C10.3907 10.5818 12.0997 11.8128 12.0997 14.0548C12.0997 16.2968 10.4587 17.5408 7.4237 17.5408Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

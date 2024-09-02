import { IconProps } from "../../types"

export default function ArrowUpIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.173828125 26.537109375"
          className={className}
        >
          <path
            d="              M11.5797 26.5368C13.2347 26.5368 14.3147 25.3748 14.3147 23.6248V11.2928L14.1917 8.3948L15.5727 10.1308L18.6207 13.1938C19.1137 13.6988 19.7287 14.0958 20.5897 14.0958C22.0527 14.0958 23.1737 13.0428 23.1737 11.4708C23.1737 10.7458 22.8727 10.0628 22.3127 9.5158L13.5897 0.7788C13.1117 0.3008 12.3187 -0.0002 11.5797 -0.0002C10.8417 -0.0002 10.0347 0.3008 9.5707 0.7788L0.8477 9.5158C0.3007 10.0628 -0.0003 10.7458 -0.0003 11.4708C-0.0003 13.0428 1.1207 14.0958 2.5837 14.0958C3.4457 14.0958 4.0467 13.6988 4.5527 13.1938L7.5747 10.1308L8.9687 8.3948L8.8317 11.2928V23.6248C8.8317 25.3748 9.9257 26.5368 11.5797 26.5368Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.943359375 26.181640625"
          className={className}
        >
          <path
            d="              M10.9647 26.1821C12.1547 26.1821 12.9477 25.3611 12.9477 24.1311V8.9551L12.8247 5.9881L15.5727 9.1601L18.6487 12.2231C19.0177 12.5921 19.4827 12.8381 20.0707 12.8381C21.1367 12.8381 21.9437 12.0451 21.9437 10.9241C21.9437 10.4041 21.7387 9.9261 21.3277 9.5021L12.4277 0.6011C12.0587 0.2191 11.5117 0.0001 10.9647 0.0001C10.4317 0.0001 9.8707 0.2191 9.5017 0.6011L0.6157 9.5021C0.2047 9.9261 -0.0003 10.4041 -0.0003 10.9241C-0.0003 12.0451 0.8067 12.8381 1.8727 12.8381C2.4747 12.8381 2.9397 12.5921 3.2947 12.2231L6.3707 9.1601L9.1187 5.9881L8.9827 8.9551V24.1311C8.9827 25.3611 9.7887 26.1821 10.9647 26.1821Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.5859375 26.373046875"
          className={className}
        >
          <path
            d="              M11.2927 26.3728C12.7287 26.3728 13.6717 25.3748 13.6717 23.8708V10.1988L13.5487 7.2458L15.5727 9.6658L18.6347 12.7288C19.0727 13.1798 19.6057 13.5078 20.3437 13.5078C21.6157 13.5078 22.5857 12.5778 22.5857 11.2108C22.5857 10.5958 22.3397 9.9938 21.8477 9.5158L13.0427 0.6968C12.6187 0.2738 11.9357 -0.0002 11.2927 -0.0002C10.6507 -0.0002 9.9667 0.2738 9.5427 0.6968L0.7387 9.5158C0.2597 9.9938 -0.0003 10.5958 -0.0003 11.2108C-0.0003 12.5778 0.9707 13.5078 2.2557 13.5078C2.9807 13.5078 3.5277 13.1798 3.9647 12.7288L6.9997 9.6658L9.0367 7.2458L8.9007 10.1988V23.8708C8.9007 25.3748 9.8577 26.3728 11.2927 26.3728Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.384765625 25.607421875"
          className={className}
        >
          <path
            d="              M10.1997 25.607C10.7327 25.607 11.1157 25.225 11.1157 24.705V5.715L11.0337 2.789L14.7107 6.74L18.8397 10.842C19.0037 11.006 19.2497 11.088 19.4957 11.088C20.0017 11.088 20.3847 10.705 20.3847 10.186C20.3847 9.939 20.3027 9.721 20.0977 9.516L10.8827 0.314C10.6777 0.109 10.4457 0 10.1997 0C9.9397 0 9.7067 0.109 9.5017 0.314L0.2867 9.516C0.0957 9.721 -0.0003 9.939 -0.0003 10.186C-0.0003 10.705 0.3827 11.088 0.8887 11.088C1.1347 11.088 1.3947 11.006 1.5447 10.842L5.6877 6.74L9.3657 2.775L9.2697 5.715V24.705C9.2697 25.225 9.6527 25.607 10.1997 25.607Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.1640625 25.962890625"
          className={className}
        >
          <path
            d="              M10.5817 25.9627C11.4707 25.9627 12.0727 25.3477 12.0727 24.4457V7.4647L11.9627 4.5257L15.5727 8.5447L18.6757 11.6077C18.9497 11.8667 19.3187 12.0447 19.7427 12.0447C20.5627 12.0447 21.1637 11.4157 21.1637 10.5817C21.1637 10.1857 21.0137 9.8297 20.6997 9.5017L11.6897 0.4787C11.3887 0.1777 10.9927 -0.0003 10.5817 -0.0003C10.1717 -0.0003 9.7757 0.1777 9.4747 0.4787L0.4647 9.5017C0.1507 9.8297 -0.0003 10.1857 -0.0003 10.5817C-0.0003 11.4157 0.6157 12.0447 1.4357 12.0447C1.8457 12.0447 2.2287 11.8667 2.4887 11.6077L5.5917 8.5447L9.2017 4.5117L9.0917 7.4647V24.4457C9.0917 25.3477 9.7067 25.9627 10.5817 25.9627Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.7265625 25.826171875"
          className={className}
        >
          <path
            d="              M10.3637 25.8263C11.0747 25.8263 11.5797 25.3343 11.5797 24.6233V6.6173L11.4847 3.7053L15.5727 8.1893L18.6897 11.2523C18.9087 11.4703 19.2227 11.5803 19.5507 11.5803C20.2347 11.5803 20.7267 11.0603 20.7267 10.3903C20.7267 10.0623 20.6177 9.7753 20.3577 9.5023L11.2797 0.4103C11.0197 0.1363 10.7047 0.0003 10.3637 0.0003C10.0217 0.0003 9.7067 0.1363 9.4477 0.4103L0.3827 9.5023C0.1227 9.7753 -0.0003 10.0623 -0.0003 10.3903C-0.0003 11.0603 0.4927 11.5803 1.1757 11.5803C1.5037 11.5803 1.8317 11.4703 2.0367 11.2523L5.1547 8.1893L9.2557 3.6913L9.1467 6.6173V24.6233C9.1467 25.3343 9.6527 25.8263 10.3637 25.8263Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.505859375 26.044921875"
          className={className}
        >
          <path
            d="              M10.7457 26.0447C11.7577 26.0447 12.4547 25.3477 12.4547 24.3087V8.1077L12.3317 5.1407L15.5727 8.8047L18.6617 11.8667C18.9767 12.1677 19.3867 12.3727 19.8787 12.3727C20.8087 12.3727 21.5057 11.6897 21.5057 10.7327C21.5057 10.2817 21.3277 9.8577 20.9727 9.5017L12.0177 0.5327C11.6897 0.1917 11.2107 -0.0003 10.7457 -0.0003C10.2817 -0.0003 9.8167 0.1917 9.4887 0.5327L0.5337 9.5017C0.1777 9.8577 -0.0003 10.2817 -0.0003 10.7327C-0.0003 11.6897 0.6977 12.3727 1.6267 12.3727C2.1187 12.3727 2.5297 12.1677 2.8437 11.8667L5.9197 8.8047L9.1597 5.1407L9.0507 8.1077V24.3087C9.0507 25.3477 9.7347 26.0447 10.7457 26.0447Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.93359375 25.306640625"
          className={className}
        >
          <path
            d="              M9.9667 25.3066C10.2677 25.3066 10.4867 25.0876 10.4867 24.8006V4.4976L10.4317 1.5856L13.5627 4.8396L19.0317 10.2946C19.1267 10.3906 19.2777 10.4316 19.4277 10.4316C19.7017 10.4316 19.9337 10.2126 19.9337 9.9126C19.9337 9.7616 19.8787 9.6386 19.7697 9.5296L10.3497 0.1636C10.2407 0.0546 10.1177 -0.0004 9.9667 -0.0004C9.8167 -0.0004 9.6937 0.0546 9.5837 0.1636L0.1637 9.5296C0.0547 9.6386 -0.0003 9.7616 -0.0003 9.9126C-0.0003 10.2126 0.2327 10.4316 0.5057 10.4316C0.6567 10.4316 0.8067 10.3906 0.9027 10.2946L6.3707 4.8396L9.5017 1.5856L9.4477 4.4976V24.8006C9.4477 25.0876 9.6657 25.3066 9.9667 25.3066Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.701171875 25.169921875"
          className={className}
        >
          <path
            d="              M9.8437 25.1702C10.0347 25.1702 10.1717 25.0192 10.1717 24.8552V3.8962L10.1307 0.9982L12.9747 3.8692L19.1407 10.0352C19.1817 10.0762 19.2777 10.1172 19.3867 10.1172C19.5507 10.1172 19.7017 9.9802 19.7017 9.7752C19.7017 9.6792 19.6737 9.6112 19.6057 9.5432L10.0767 0.0952C10.0217 0.0272 9.9527 0.0002 9.8437 0.0002C9.7477 0.0002 9.6797 0.0272 9.6247 0.0952L0.0957 9.5432C0.0277 9.6112 -0.0003 9.6792 -0.0003 9.7752C-0.0003 9.9802 0.1507 10.1172 0.3147 10.1172C0.4097 10.1172 0.5197 10.0762 0.5607 10.0352L6.7267 3.8692L9.5707 0.9982L9.5297 3.8962V24.8552C9.5297 25.0192 9.6657 25.1702 9.8437 25.1702Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
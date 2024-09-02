import { IconProps } from "../../types"

export default function FlashlightOnFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.546875 33.591796875"
          className={className}
        >
          <path
            d="              M-0.0003 3.5138H14.5467V3.2538C14.5467 1.1208 13.4397 -0.0002 11.3747 -0.0002H3.1857C1.1207 -0.0002 -0.0003 1.1208 -0.0003 3.2538ZM5.9747 33.5918H8.5727C10.6507 33.5918 11.7577 32.4848 11.7577 30.3378V14.2598C11.7577 12.8108 12.0587 11.9078 12.5647 11.1288L13.3577 9.8988C14.0547 8.8188 14.5467 7.8198 14.5467 6.4668V5.7418H-0.0003V6.4668C-0.0003 7.8198 0.5057 8.8188 1.2027 9.8988L1.9827 11.1288C2.4887 11.9078 2.7887 12.8108 2.7887 14.2598V30.3378C2.7887 32.4848 3.9097 33.5918 5.9747 33.5918ZM4.5797 20.1798V15.3808C4.5797 13.8768 5.7557 12.6878 7.2867 12.6878C8.7907 12.6878 9.9667 13.8768 9.9667 15.3808V20.1798C9.9667 21.6838 8.7907 22.8598 7.2867 22.8598C5.7557 22.8598 4.5797 21.6838 4.5797 20.1798ZM7.2867 13.6308C6.3027 13.6308 5.5237 14.3828 5.5237 15.3808C5.5237 16.3648 6.3027 17.1308 7.2867 17.1308C8.2717 17.1308 9.0367 16.3648 9.0367 15.3808C9.0367 14.3828 8.2717 13.6308 7.2867 13.6308Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.986328125 32.94921875"
          className={className}
        >
          <path
            d="              M-0.0003 3.3227H13.9867V2.9667C13.9867 0.9977 12.9887 -0.0003 11.0747 -0.0003H2.9117C0.9977 -0.0003 -0.0003 0.9977 -0.0003 2.9667ZM5.7017 32.9497H8.2847C10.1717 32.9497 11.1837 31.9377 11.1837 29.9687V13.9997C11.1837 12.5237 11.5117 11.5527 12.0447 10.7457L12.8247 9.5297C13.5077 8.4627 13.9867 7.5057 13.9867 6.2207V5.2367H-0.0003V6.2207C-0.0003 7.5057 0.4787 8.4627 1.1617 9.5297L1.9417 10.7457C2.4607 11.5527 2.7887 12.5237 2.7887 13.9997V29.9687C2.7887 31.9377 3.8007 32.9497 5.7017 32.9497ZM4.4437 19.6877V15.2167C4.4437 13.7947 5.5507 12.6737 6.9997 12.6737C8.4217 12.6737 9.5427 13.7947 9.5427 15.2167V19.6877C9.5427 21.1097 8.4217 22.2307 6.9997 22.2307C5.5507 22.2307 4.4437 21.1097 4.4437 19.6877ZM6.9997 13.5627C6.0567 13.5627 5.3317 14.2737 5.3317 15.2167C5.3317 16.1327 6.0707 16.8707 6.9997 16.8707C7.9157 16.8707 8.6547 16.1327 8.6547 15.2167C8.6547 14.2737 7.9437 13.5627 6.9997 13.5627Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.287109375 33.291015625"
          className={className}
        >
          <path
            d="              M-0.0003 3.4314H14.2867V3.1304C14.2867 1.0664 13.2207 0.0004 11.2247 0.0004H3.0487C1.0667 0.0004 -0.0003 1.0664 -0.0003 3.1304ZM5.8517 33.2914H8.4357C10.4177 33.2914 11.4847 32.2244 11.4847 30.1734V14.1364C11.4847 12.6874 11.7987 11.7444 12.3187 10.9514L13.1117 9.7344C13.7947 8.6544 14.2867 7.6694 14.2867 6.3574V5.5094H-0.0003V6.3574C-0.0003 7.6694 0.4927 8.6544 1.1757 9.7344L1.9687 10.9514C2.4747 11.7444 2.7887 12.6874 2.7887 14.1364V30.1734C2.7887 32.2244 3.8557 33.2914 5.8517 33.2914ZM4.5117 19.9474V15.3124C4.5117 13.8354 5.6597 12.6874 7.1507 12.6874C8.6137 12.6874 9.7757 13.8354 9.7757 15.3124V19.9474C9.7757 21.4234 8.6137 22.5724 7.1507 22.5724C5.6597 22.5724 4.5117 21.4234 4.5117 19.9474ZM7.1507 13.6034C6.1797 13.6034 5.4277 14.3414 5.4277 15.3124C5.4277 16.2554 6.1937 17.0074 7.1507 17.0074C8.1077 17.0074 8.8457 16.2554 8.8457 15.3124C8.8457 14.3414 8.1207 13.6034 7.1507 13.6034Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.1796875 31.9375"
          className={className}
        >
          <path
            d="              M-0.0003 3.1038H13.1797V2.5978C13.1797 0.8478 12.3317 -0.0002 10.6507 -0.0002H2.5427C0.8477 -0.0002 -0.0003 0.8478 -0.0003 2.5978ZM5.3317 31.9378H7.8477C9.4887 31.9378 10.3907 31.0078 10.3907 29.3258V13.7678C10.3907 12.2498 10.7327 11.2108 11.2797 10.3768L12.0587 9.1598C12.7287 8.1078 13.1797 7.2048 13.1797 5.9878V4.5118H-0.0003V5.9878C-0.0003 7.2048 0.4517 8.1078 1.1207 9.1598L1.9007 10.3768C2.4477 11.2108 2.7887 12.2498 2.7887 13.7678V29.3258C2.7887 31.0078 3.7047 31.9378 5.3317 31.9378ZM4.2387 18.9358V14.9568C4.2387 13.6448 5.2777 12.6188 6.6037 12.6188C7.9157 12.6188 8.9417 13.6448 8.9417 14.9568V18.9358C8.9417 20.2348 7.9157 21.2738 6.6037 21.2738C5.2777 21.2738 4.2387 20.2348 4.2387 18.9358ZM6.6037 13.4528C5.7427 13.4528 5.0857 14.0958 5.0857 14.9568C5.0857 15.7908 5.7557 16.4608 6.6037 16.4608C7.4377 16.4608 8.1077 15.7908 8.1077 14.9568C8.1077 14.0958 7.4647 13.4528 6.6037 13.4528Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.6171875 32.552734375"
          className={className}
        >
          <path
            d="              M-0.0003 3.2263H13.6177V2.8023C13.6177 0.9293 12.6877 0.0003 10.8827 0.0003H2.7347C0.9297 0.0003 -0.0003 0.9293 -0.0003 2.8023ZM5.5237 32.5523H8.0937C9.8707 32.5523 10.8277 31.6093 10.8277 29.7633V13.8633C10.8277 12.3593 11.1567 11.3473 11.7027 10.5273L12.4827 9.2973C13.1527 8.2443 13.6177 7.3283 13.6177 6.0843V4.9353H-0.0003V6.0843C-0.0003 7.3283 0.4647 8.2443 1.1347 9.2973L1.9137 10.5273C2.4477 11.3473 2.7887 12.3593 2.7887 13.8633V29.7633C2.7887 31.6093 3.7327 32.5523 5.5237 32.5523ZM4.3477 19.3863V15.1343C4.3477 13.7543 5.4277 12.6743 6.8227 12.6743C8.1897 12.6743 9.2697 13.7543 9.2697 15.1343V19.3863C9.2697 20.7543 8.1897 21.8473 6.8227 21.8473C5.4277 21.8473 4.3477 20.7543 4.3477 19.3863ZM6.8227 13.5493C5.9067 13.5493 5.2087 14.2183 5.2087 15.1343C5.2087 16.0093 5.9197 16.7203 6.8227 16.7203C7.6977 16.7203 8.4087 16.0093 8.4087 15.1343C8.4087 14.2183 7.7247 13.5493 6.8227 13.5493Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.412109375 32.3203125"
          className={className}
        >
          <path
            d="              M-0.0003 3.1582H13.4117V2.6932C13.4117 0.8753 12.5237 0.0003 10.7737 0.0003H2.6247C0.8747 0.0003 -0.0003 0.8753 -0.0003 2.6932ZM5.4277 32.3203H7.9847C9.7067 32.3203 10.6227 31.4043 10.6227 29.6273V13.7673C10.6227 12.2503 10.9647 11.2243 11.5117 10.3773L12.2907 9.1603C12.9607 8.1073 13.4117 7.2053 13.4117 5.9883V4.7443H-0.0003V5.9883C-0.0003 7.2053 0.4517 8.1073 1.1207 9.1603L1.9007 10.3773C2.4477 11.2243 2.7887 12.2503 2.7887 13.7673V29.6273C2.7887 31.4043 3.7047 32.3203 5.4277 32.3203ZM4.2927 19.1953V15.0663C4.2927 13.7263 5.3457 12.6603 6.7127 12.6603C8.0667 12.6603 9.1187 13.7263 9.1187 15.0663V19.1953C9.1187 20.5493 8.0667 21.6013 6.7127 21.6013C5.3457 21.6013 4.2927 20.5493 4.2927 19.1953ZM6.7127 13.5213C5.8107 13.5213 5.1407 14.1773 5.1407 15.0663C5.1407 15.9273 5.8377 16.6253 6.7127 16.6253C7.5747 16.6253 8.2717 15.9273 8.2717 15.0663C8.2717 14.1773 7.6157 13.5213 6.7127 13.5213Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.767578125 32.73046875"
          className={className}
        >
          <path
            d="              M-0.0003 3.2673H13.7677V2.8713C13.7677 0.9573 12.8107 0.0003 10.9647 0.0003H2.8027C0.9567 0.0003 -0.0003 0.9573 -0.0003 2.8713ZM5.5917 32.7303H8.1757C10.0077 32.7303 10.9787 31.7463 10.9787 29.8453V13.9183C10.9787 12.4273 11.3207 11.4433 11.8397 10.6233L12.6327 9.3923C13.3027 8.3403 13.7677 7.3963 13.7677 6.1383V5.0583H-0.0003V6.1383C-0.0003 7.3963 0.4647 8.3403 1.1487 9.3923L1.9277 10.6233C2.4607 11.4433 2.7887 12.4273 2.7887 13.9183V29.8453C2.7887 31.7463 3.7597 32.7303 5.5917 32.7303ZM4.3887 19.5093V15.1753C4.3887 13.7673 5.4827 12.6733 6.8907 12.6733C8.2987 12.6733 9.3927 13.7673 9.3927 15.1753V19.5093C9.3927 20.9043 8.2987 22.0113 6.8907 22.0113C5.4827 22.0113 4.3887 20.9043 4.3887 19.5093ZM6.8907 13.5623C5.9747 13.5623 5.2637 14.2463 5.2637 15.1753C5.2637 16.0643 5.9887 16.7753 6.8907 16.7753C7.7927 16.7753 8.5037 16.0643 8.5037 15.1753C8.5037 14.2463 7.8207 13.5623 6.8907 13.5623Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.87890625 31.4453125"
          className={className}
        >
          <path
            d="              M-0.0003 3.0487H12.8787V2.4887C12.8787 0.8208 12.0727 -0.0003 10.4727 -0.0003H2.4197C0.8067 -0.0003 -0.0003 0.8208 -0.0003 2.4887ZM5.2087 31.4458H7.6697C9.1877 31.4458 10.0897 30.5018 10.0897 28.9568V13.7678C10.0897 12.2498 10.4317 11.2248 10.9787 10.3908L11.7577 9.1597C12.4277 8.1208 12.8787 7.2048 12.8787 5.9887V4.2108H-0.0003V5.9887C-0.0003 7.2048 0.4517 8.1208 1.1207 9.1597L1.9007 10.3908C2.4477 11.2248 2.7887 12.2498 2.7887 13.7678V28.9568C2.7887 30.5018 3.7047 31.4458 5.2087 31.4458ZM4.1837 18.5798V14.8208C4.1837 13.5488 5.1817 12.5648 6.4527 12.5648C7.7247 12.5648 8.7087 13.5488 8.7087 14.8208V18.5798C8.7087 19.8378 7.7247 20.8358 6.4527 20.8358C5.1817 20.8358 4.1837 19.8378 4.1837 18.5798ZM6.4527 13.3708C5.6327 13.3708 4.9907 14.0138 4.9907 14.8208C4.9907 15.6138 5.6327 16.2558 6.4527 16.2558C7.2597 16.2558 7.9027 15.6138 7.9027 14.8208C7.9027 14.0138 7.2597 13.3708 6.4527 13.3708Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.728515625 31.171875"
          className={className}
        >
          <path
            d="              M-0.0003 3.008H12.7287V2.42C12.7287 0.793 11.9497 0 10.3767 0H2.3517C0.7797 0 -0.0003 0.793 -0.0003 2.42ZM5.1407 31.172H7.5877C9.0237 31.172 9.9397 30.228 9.9397 28.752V13.768C9.9397 12.25 10.2817 11.211 10.8277 10.377L11.6077 9.16C12.2777 8.107 12.7287 7.205 12.7287 5.975V4.047H-0.0003V5.975C-0.0003 7.205 0.4517 8.107 1.1207 9.16L1.9007 10.377C2.4477 11.211 2.7887 12.25 2.7887 13.768V28.752C2.7887 30.228 3.7047 31.172 5.1407 31.172ZM4.1567 18.389V14.738C4.1567 13.494 5.1267 12.523 6.3847 12.523C7.6157 12.523 8.5997 13.494 8.5997 14.738V18.389C8.5997 19.633 7.6157 20.603 6.3847 20.603C5.1267 20.603 4.1567 19.633 4.1567 18.389ZM6.3847 13.316C5.5777 13.316 4.9497 13.945 4.9497 14.738C4.9497 15.518 5.5777 16.146 6.3847 16.146C7.1637 16.146 7.7927 15.518 7.7927 14.738C7.7927 13.945 7.1637 13.316 6.3847 13.316Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

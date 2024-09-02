import { IconProps } from "../../types"

export default function RepeatIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.0703125 30.4609375"
          className={className}
        >
          <path
            d="              M2.5297 16.6662C3.9097 16.6662 5.0317 15.5312 5.0317 14.1362V13.2892C5.0317 10.8422 6.6447 9.3922 9.3377 9.3922H19.4827V12.2912C19.4827 13.4262 20.1797 14.1362 21.2867 14.1362C21.8207 14.1362 22.2167 13.9592 22.5447 13.6852L28.7927 8.3402C29.6137 7.6422 29.5997 6.4802 28.7927 5.7832L22.5447 0.4512C22.2167 0.1912 21.8207 0.0002 21.2867 0.0002C20.1797 0.0002 19.4827 0.7112 19.4827 1.8592V4.4842H9.5297C3.5817 4.4842 -0.0003 7.5062 -0.0003 12.5232V14.1362C-0.0003 15.5312 1.1347 16.6662 2.5297 16.6662ZM31.5547 13.8492C30.1597 13.8492 29.0387 14.9842 29.0387 16.3792V17.2262C29.0387 19.6742 27.4397 21.1092 24.7327 21.1092H14.5877V18.1832C14.5877 17.0352 13.8907 16.3242 12.7837 16.3242C12.2497 16.3242 11.8537 16.5022 11.5387 16.7752L5.2777 22.1212C4.4567 22.8322 4.4707 23.9942 5.2777 24.6772L11.5387 30.0102C11.8537 30.2832 12.2497 30.4612 12.7837 30.4612C13.8907 30.4612 14.5877 29.7502 14.5877 28.6152V26.0312H24.5407C30.4887 26.0312 34.0707 22.9962 34.0707 17.9922V16.3792C34.0707 14.9842 32.9357 13.8492 31.5547 13.8492Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.623046875 27.412109375"
          className={className}
        >
          <path
            d="              M1.8457 14.6558C2.8707 14.6558 3.6777 13.8498 3.6777 12.8108V11.7438C3.6777 9.3378 5.2777 7.8618 7.8747 7.8618H18.2797V10.9098C18.2797 11.7578 18.7847 12.2638 19.6187 12.2638C20.0157 12.2638 20.3297 12.1268 20.5897 11.9078L26.3047 7.0958C26.9337 6.5628 26.9477 5.7008 26.3047 5.1678L20.5897 0.3558C20.3297 0.1368 20.0157 -0.0002 19.6187 -0.0002C18.7847 -0.0002 18.2797 0.5198 18.2797 1.3668V4.2658H8.0667C3.0897 4.2658 -0.0003 6.9178 -0.0003 11.2788V12.8108C-0.0003 13.8498 0.8207 14.6558 1.8457 14.6558ZM29.7907 12.7698C28.7657 12.7698 27.9587 13.5898 27.9587 14.6148V15.6818C27.9587 18.0878 26.3457 19.5648 23.7617 19.5648H13.3577V16.5158C13.3577 15.6678 12.8377 15.1488 12.0037 15.1488C11.6207 15.1488 11.2927 15.2848 11.0337 15.5038L5.3187 20.3168C4.6897 20.8628 4.6897 21.7108 5.3187 22.2438L11.0337 27.0568C11.2927 27.2758 11.6207 27.4118 12.0037 27.4118C12.8377 27.4118 13.3577 26.9058 13.3577 26.0588V23.1598H23.5567C28.5337 23.1598 31.6227 20.5078 31.6227 16.1468V14.6148C31.6227 13.5898 30.8167 12.7698 29.7907 12.7698Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.921875 29.01171875"
          className={className}
        >
          <path
            d="              M2.2017 15.7089C3.4177 15.7089 4.3887 14.7249 4.3887 13.5079V12.5509C4.3887 10.1169 6.0017 8.6679 8.6547 8.6679H18.9087V11.6349C18.9087 12.6329 19.5237 13.2479 20.5077 13.2479C20.9727 13.2479 21.3277 13.0839 21.6157 12.8379L27.6177 7.7519C28.3557 7.1229 28.3557 6.0979 27.6177 5.4829L21.6157 0.3969C21.3277 0.1639 20.9727 -0.0001 20.5077 -0.0001C19.5237 -0.0001 18.9087 0.6149 18.9087 1.6129V4.3749H8.8457C3.3497 4.3749 -0.0003 7.2189 -0.0003 11.9219V13.5079C-0.0003 14.7249 0.9847 15.7089 2.2017 15.7089ZM30.7207 13.3299C29.5037 13.3299 28.5337 14.3149 28.5337 15.5309V16.4879C28.5337 18.9219 26.9197 20.3709 24.2677 20.3709H14.0137V17.3909C14.0137 16.3789 13.3987 15.7639 12.4137 15.7639C11.9497 15.7639 11.5937 15.9279 11.2927 16.1739L5.3047 21.2599C4.5667 21.8889 4.5667 22.9139 5.3047 23.5289L11.2927 28.6149C11.5937 28.8609 11.9497 29.0119 12.4137 29.0119C13.3987 29.0119 14.0137 28.3969 14.0137 27.3989V24.6779H24.0767C29.5727 24.6779 32.9217 21.8199 32.9217 17.1169V15.5309C32.9217 14.3149 31.9377 13.3299 30.7207 13.3299Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.931640625 23.65234375"
          className={className}
        >
          <path
            d="              M0.9567 12.1819C1.5177 12.1819 1.9137 11.7849 1.9137 11.2379V9.9809C1.9137 7.4239 3.5137 5.8929 6.1797 5.8929H16.3657V9.1469C16.3657 9.6109 16.6247 9.8569 17.1037 9.8569C17.3227 9.8569 17.5137 9.7889 17.7187 9.6389L22.7907 5.5509C23.2017 5.2089 23.2287 4.6619 22.7907 4.3199L17.7187 0.2189C17.5137 0.0679 17.3227 -0.0001 17.1037 -0.0001C16.6247 -0.0001 16.3657 0.2599 16.3657 0.7249V4.0469H6.3297C2.5157 4.0469 -0.0003 6.1929 -0.0003 9.8709V11.2379C-0.0003 11.7849 0.3967 12.1819 0.9567 12.1819ZM26.9747 11.4429C26.4137 11.4429 26.0177 11.8539 26.0177 12.3999V13.6579C26.0177 16.2149 24.4177 17.7459 21.7517 17.7459H11.5667V14.5059C11.5667 14.0549 11.3067 13.7949 10.8277 13.7949C10.6097 13.7949 10.4177 13.8629 10.2267 14.0139L5.1407 18.1149C4.7167 18.4569 4.7027 18.9899 5.1407 19.3319L10.2267 23.4339C10.4177 23.5839 10.6097 23.6519 10.8277 23.6519C11.3067 23.6519 11.5667 23.3929 11.5667 22.9409V19.5919H21.6017C25.4157 19.5919 27.9317 17.4449 27.9317 13.7679V12.3999C27.9317 11.8539 27.5347 11.4429 26.9747 11.4429Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.064453125 25.443359375"
          className={className}
        >
          <path
            d="              M1.4087 13.3577C2.2017 13.3577 2.8027 12.7427 2.8027 11.9497V10.7457C2.8027 8.3677 4.4157 6.8637 6.9317 6.8637H17.4997V10.0077C17.4997 10.6637 17.8967 11.0467 18.5527 11.0467C18.8537 11.0467 19.1267 10.9377 19.3597 10.7597L24.7187 6.2887C25.2247 5.8657 25.2387 5.1957 24.7187 4.7577L19.3597 0.2867C19.1267 0.0957 18.8537 -0.0003 18.5527 -0.0003C17.8967 -0.0003 17.4997 0.3687 17.4997 1.0387V4.1017H7.1367C2.7887 4.1017 -0.0003 6.5217 -0.0003 10.4727V11.9497C-0.0003 12.7427 0.6157 13.3577 1.4087 13.3577ZM28.6567 12.0587C27.8637 12.0587 27.2617 12.6737 27.2617 13.4667V14.6837C27.2617 17.0627 25.6487 18.5667 23.1327 18.5667H12.5647V15.4217C12.5647 14.7657 12.1677 14.3827 11.5117 14.3827C11.2107 14.3827 10.9377 14.4927 10.7047 14.6697L5.3457 19.1547C4.8267 19.5777 4.8267 20.2477 5.3457 20.6717L10.7047 25.1567C10.9377 25.3337 11.2107 25.4437 11.5117 25.4437C12.1677 25.4437 12.5647 25.0607 12.5647 24.4047V21.3147H22.9277C27.2757 21.3147 30.0647 18.8947 30.0647 14.9567V13.4667C30.0647 12.6737 29.4497 12.0587 28.6567 12.0587Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.189453125 24.349609375"
          className={className}
        >
          <path
            d="              M1.1617 12.6467C1.8187 12.6467 2.3247 12.1407 2.3247 11.4847V10.1857C2.3247 7.8337 3.9237 6.3027 6.3987 6.3027H17.0627V9.5157C17.0627 10.0627 17.3907 10.3767 17.9517 10.3767C18.1977 10.3767 18.4567 10.2817 18.6487 10.1167L23.8167 5.8377C24.2537 5.4827 24.2817 4.9217 23.8167 4.5387L18.6487 0.2457C18.4567 0.0817 18.1977 -0.0003 17.9517 -0.0003C17.3907 -0.0003 17.0627 0.3007 17.0627 0.8617V4.0327H6.6177C2.6117 4.0327 -0.0003 6.3167 -0.0003 10.0217V11.4847C-0.0003 12.1407 0.4927 12.6467 1.1617 12.6467ZM28.0277 11.6757C27.3577 11.6757 26.8657 12.1677 26.8657 12.8377V14.1367C26.8657 16.4887 25.2657 18.0057 22.7777 18.0057H12.1137V14.8337C12.1137 14.2737 11.7987 13.9727 11.2387 13.9727C10.9787 13.9727 10.7327 14.0547 10.5277 14.2187L5.3597 18.4977C4.9217 18.8807 4.9087 19.4277 5.3597 19.7967L10.5277 24.0897C10.7327 24.2537 10.9787 24.3497 11.2387 24.3497C11.7987 24.3497 12.1137 24.0347 12.1137 23.4887V20.2887H22.5587C26.5777 20.2887 29.1897 18.0057 29.1897 14.3007V12.8377C29.1897 12.1677 28.6837 11.6757 28.0277 11.6757Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.734375 26.3046875"
          className={className}
        >
          <path
            d="              M1.5997 13.9312C2.4887 13.9312 3.1857 13.2202 3.1857 12.3322V11.1832C3.1857 8.7912 4.7847 7.3012 7.3417 7.3012H17.8277V10.4042C17.8277 11.1422 18.2797 11.5802 19.0177 11.5802C19.3597 11.5802 19.6467 11.4572 19.8927 11.2652L25.4027 6.6442C25.9627 6.1792 25.9767 5.4142 25.4027 4.9492L19.8927 0.3282C19.6467 0.1232 19.3597 0.0002 19.0177 0.0002C18.2797 0.0002 17.8277 0.4372 17.8277 1.1762V4.1832H7.5467C2.9117 4.1832 -0.0003 6.6992 -0.0003 10.8282V12.3322C-0.0003 13.2202 0.6977 13.9312 1.5997 13.9312ZM29.1487 12.3732C28.2457 12.3732 27.5627 13.0702 27.5627 13.9722V15.1212C27.5627 17.5132 25.9497 19.0042 23.4067 19.0042H12.9067V15.9002C12.9067 15.1622 12.4687 14.7242 11.7307 14.7242C11.3887 14.7242 11.0877 14.8472 10.8557 15.0392L5.3317 19.6602C4.7717 20.1382 4.7577 20.8902 5.3317 21.3552L10.8557 25.9762C11.0877 26.1812 11.3887 26.3042 11.7307 26.3042C12.4687 26.3042 12.9067 25.8672 12.9067 25.1152V22.1212H23.2017C27.8227 22.1212 30.7347 19.6052 30.7347 15.4762V13.9722C30.7347 13.0702 30.0367 12.3732 29.1487 12.3732Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.27734375 22.72265625"
          className={className}
        >
          <path
            d="              M0.6837 11.5801C1.1077 11.5801 1.3677 11.3071 1.3677 10.8961V9.6801C1.3677 6.8771 2.9667 5.3321 5.8927 5.3321H15.4357V8.6411C15.4357 8.9821 15.6267 9.1741 15.9827 9.1741C16.1597 9.1741 16.2837 9.1191 16.4607 8.9961L21.4377 5.1411C21.8207 4.8401 21.8207 4.3201 21.4377 4.0191L16.4607 0.1781C16.2837 0.0411 16.1597 0.0001 15.9827 0.0001C15.6267 0.0001 15.4357 0.1911 15.4357 0.5191V4.0471H5.9477C2.3787 4.0471 -0.0003 6.0161 -0.0003 9.6521V10.8961C-0.0003 11.3071 0.2737 11.5801 0.6837 11.5801ZM25.5937 11.1421C25.1697 11.1421 24.9097 11.4021 24.9097 11.8261V13.0291C24.9097 15.8461 23.3107 17.3771 20.3847 17.3771H10.8417V14.0681C10.8417 13.7401 10.6507 13.5491 10.2947 13.5491C10.1177 13.5491 9.9937 13.5901 9.8027 13.7261L4.8397 17.5821C4.4567 17.8691 4.4437 18.4021 4.8397 18.7031L9.8027 22.5451C9.9937 22.6681 10.1177 22.7231 10.2947 22.7231C10.6507 22.7231 10.8417 22.5311 10.8417 22.1891V18.6621H20.3297C23.8987 18.6621 26.2777 16.6931 26.2777 13.0701V11.8261C26.2777 11.4021 26.0037 11.1421 25.5937 11.1421Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.4296875 22.244140625"
          className={className}
        >
          <path
            d="              M0.5467 11.2657C0.8887 11.2657 1.0937 11.0607 1.0937 10.7187V9.5427C1.0937 6.5897 2.6797 5.0587 5.7427 5.0587H14.9567V8.3947C14.9567 8.6677 15.1077 8.8187 15.4087 8.8187C15.5727 8.8187 15.6547 8.7907 15.8317 8.6677L20.7407 4.9357C21.1097 4.6617 21.1097 4.1427 20.7407 3.8687L15.8317 0.1637C15.6547 0.0407 15.5727 -0.0003 15.4087 -0.0003C15.1077 -0.0003 14.9567 0.1507 14.9567 0.4377V4.0467H5.7427C2.3107 4.0467 -0.0003 5.9337 -0.0003 9.5427V10.7187C-0.0003 11.0607 0.2047 11.2657 0.5467 11.2657ZM24.8827 10.9787C24.5407 10.9787 24.3357 11.1837 24.3357 11.5257V12.7147C24.3357 15.6547 22.7497 17.1997 19.6737 17.1997H10.4727V13.8637C10.4727 13.5897 10.3227 13.4257 10.0077 13.4257C9.8577 13.4257 9.7757 13.4667 9.5977 13.5897L4.6757 17.3087C4.3207 17.5817 4.3207 18.1157 4.6757 18.3887L9.5977 22.0937C9.7757 22.2167 9.8577 22.2437 10.0077 22.2437C10.3227 22.2437 10.4727 22.0937 10.4727 21.8207V18.1977H19.6877C23.1057 18.1977 25.4297 16.3247 25.4297 12.7147V11.5257C25.4297 11.1837 25.2247 10.9787 24.8827 10.9787Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
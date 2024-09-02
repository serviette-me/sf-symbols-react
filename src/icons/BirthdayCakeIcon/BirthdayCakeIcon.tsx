import { IconProps } from "../../types"

export default function BirthdayCakeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.005859375 37.48730886136897"
          className={className}
        >
          <path
            d="              M2.1877 37.4872H36.8187C38.0347 37.4872 39.0057 36.5032 39.0057 35.3002C39.0057 34.0832 38.0347 33.1122 36.8187 33.1122H36.0117V26.0982C36.0117 22.4752 34.1657 20.5202 30.6247 20.3702V18.1282C30.6247 14.3682 28.6287 12.3862 24.8147 12.3862H21.1777V6.9712C21.9027 6.3972 22.3537 5.4682 22.3537 4.4012C22.3537 2.8292 21.8337 1.7212 20.9997 0.7782C20.1937 -0.2338 18.9087 -0.2468 18.0747 0.6692C17.2947 1.6262 16.6657 2.7202 16.6657 4.4012C16.6657 5.4542 17.1177 6.3842 17.8277 6.9582V12.3862H14.1917C10.3907 12.3862 8.3807 14.3542 8.3807 18.1282V20.3702C4.8537 20.5202 2.9937 22.4752 2.9937 26.0982V33.1122H2.1877C0.9707 33.1122 -0.0003 34.0832 -0.0003 35.3002C-0.0003 36.5032 0.9707 37.4872 2.1877 37.4872ZM12.7427 18.3052C12.7427 17.1302 13.1387 16.7612 14.2597 16.7612H24.7737C25.8807 16.7612 26.2777 17.1302 26.2777 18.3052V20.3562H12.7427ZM19.5647 26.4812C17.1997 26.4812 16.4337 28.3412 14.5607 28.3412C13.0837 28.3412 12.2497 26.4812 9.9117 26.4812C8.8867 26.4812 8.0797 26.8502 7.3687 27.2612V26.2762C7.3687 25.1002 7.7657 24.7312 8.8727 24.7312H30.1327C31.2407 24.7312 31.6367 25.1002 31.6367 26.2762V27.1922C30.9527 26.8092 30.1877 26.4812 29.2167 26.4812C26.8927 26.4812 26.0317 28.3412 24.5547 28.3412C22.6817 28.3412 21.9437 26.4812 19.5647 26.4812ZM19.5647 29.5032C20.9727 29.5032 22.0937 31.3622 24.5547 31.3622C26.9067 31.3622 27.9317 29.5032 29.2167 29.5032C29.9827 29.5032 30.6657 30.1592 31.6367 30.6922V33.1122H7.3687V30.7612C8.4087 30.2142 9.1057 29.5032 9.9117 29.5032C11.1977 29.5032 12.2227 31.3622 14.5607 31.3622C17.0217 31.3622 18.1427 29.5032 19.5647 29.5032Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.24609375 34.22146302127051"
          className={className}
        >
          <path
            d="              M1.6407 34.2213H33.6057C34.5077 34.2213 35.2457 33.4833 35.2457 32.5813C35.2457 31.6783 34.5077 30.9403 33.6057 30.9403H32.6757V23.8723C32.6757 20.6453 30.9807 18.9633 27.6997 18.9633H27.6587V16.4343C27.6587 13.2073 25.9627 11.5263 22.6817 11.5263H18.8397V5.9893C19.5097 5.5383 19.9477 4.7173 19.9477 3.7603C19.9477 2.3933 19.5097 1.4503 18.7577 0.6023C18.1287 -0.1767 17.1997 -0.1907 16.5567 0.5063C15.8317 1.3813 15.3127 2.3113 15.3127 3.7603C15.3127 4.7043 15.7497 5.5243 16.4067 5.9753V11.5263H12.5777C9.3107 11.5263 7.6017 13.1943 7.6017 16.4343V18.9633H7.5607C4.2927 18.9633 2.5837 20.6313 2.5837 23.8723V30.9403H1.6407C0.7387 30.9403 -0.0003 31.6783 -0.0003 32.5813C-0.0003 33.4833 0.7387 34.2213 1.6407 34.2213ZM10.8827 16.5843C10.8827 15.3403 11.4437 14.8073 12.6327 14.8073H22.6267C23.8167 14.8073 24.3767 15.3403 24.3767 16.5843V18.9633H10.8827ZM17.6507 24.3913C15.5037 24.3913 14.8067 26.0863 13.0837 26.0863C11.6897 26.0863 10.9097 24.3913 8.7907 24.3913C7.5467 24.3913 6.6587 24.9933 5.8657 25.4713V24.0223C5.8657 22.7783 6.4257 22.2453 7.6017 22.2453H27.6447C28.8207 22.2453 29.3807 22.7783 29.3807 24.0223V25.4443C28.6017 24.9653 27.7267 24.3913 26.5097 24.3913C24.3907 24.3913 23.6117 26.0863 22.2167 26.0863C20.4937 26.0863 19.8107 24.3913 17.6507 24.3913ZM17.6507 26.9753C18.9497 26.9753 19.9747 28.6703 22.2167 28.6703C24.3637 28.6703 25.3067 26.9753 26.5097 26.9753C27.3847 26.9753 28.1367 27.8643 29.3807 28.3563V30.9403H5.8657V28.3703C7.1507 27.8913 7.9027 26.9753 8.7907 26.9753C9.9937 26.9753 10.9377 28.6703 13.0837 28.6703C15.3127 28.6703 16.3377 26.9753 17.6507 26.9753Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.228515625 35.95426454179103"
          className={className}
        >
          <path
            d="              M1.9277 35.9545H35.3007C36.3677 35.9545 37.2287 35.0795 37.2287 34.0125C37.2287 32.9465 36.3677 32.0855 35.3007 32.0855H34.4397V25.0575C34.4397 21.6125 32.6487 19.7665 29.2307 19.6985V17.3335C29.2307 13.8195 27.3707 11.9735 23.8027 11.9735H20.0707V6.5185C20.7677 5.9995 21.2187 5.1105 21.2187 4.0985C21.2187 2.6225 20.7407 1.5965 19.9477 0.6945C19.2227 -0.2075 18.1017 -0.2215 17.3637 0.5985C16.5977 1.5145 16.0237 2.5265 16.0237 4.0985C16.0237 5.0965 16.4747 5.9715 17.1587 6.4915V11.9735H13.4257C9.8847 11.9735 8.0117 13.8055 8.0117 17.3335V19.6985C4.5937 19.7805 2.8027 21.5985 2.8027 25.0575V32.0855H1.9277C0.8617 32.0855 -0.0003 32.9465 -0.0003 34.0125C-0.0003 35.0795 0.8617 35.9545 1.9277 35.9545ZM11.8677 17.4975C11.8677 16.2805 12.3317 15.8425 13.4937 15.8425H23.7617C24.8967 15.8425 25.3747 16.2805 25.3747 17.4975V19.6985H11.8677ZM18.6617 25.4955C16.3927 25.4955 15.6677 27.2725 13.8637 27.2725C12.4277 27.2725 11.6077 25.4955 9.3787 25.4955C8.2577 25.4955 7.4097 25.9605 6.6587 26.4115V25.2085C6.6587 24.0055 7.1367 23.5675 8.2717 23.5675H28.9567C30.1057 23.5675 30.5707 24.0055 30.5707 25.2085V26.3565C29.8457 25.9195 29.0257 25.4955 27.9317 25.4955C25.7167 25.4955 24.8967 27.2725 23.4477 27.2725C21.6427 27.2725 20.9317 25.4955 18.6617 25.4955ZM18.6617 28.3115C20.0297 28.3115 21.0957 30.0895 23.4477 30.0895C25.7167 30.0895 26.6877 28.3115 27.9317 28.3115C28.7517 28.3115 29.4767 29.0775 30.5707 29.5965V32.0855H6.6587V29.6375C7.8067 29.1185 8.5317 28.3115 9.3787 28.3115C10.6227 28.3115 11.6207 30.0895 13.8637 30.0895C16.2147 30.0895 17.2947 28.3115 18.6617 28.3115Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.775390625 30.157049196164355"
          className={className}
        >
          <path
            d="              M0.8477 30.1574H29.9277C30.3927 30.1574 30.7757 29.7744 30.7757 29.3094C30.7757 28.8444 30.3927 28.4614 29.9277 28.4614H28.6427V20.8734C28.6427 18.4954 27.3577 17.2094 24.9517 17.2094H24.0487V14.0514C24.0487 11.6724 22.7637 10.4014 20.3577 10.4014H15.9827V4.7274C16.6117 4.4544 17.0487 3.7704 17.0487 2.9504C17.0487 1.8704 16.7067 1.1594 16.0367 0.3664C15.6407 -0.1126 15.1897 -0.1126 14.8067 0.3114C14.1227 1.1184 13.7267 1.8294 13.7267 2.9504C13.7267 3.7564 14.1507 4.4134 14.7387 4.7004V10.4014H10.4317C8.0257 10.4014 6.7267 11.6724 6.7267 14.0514V17.2094H5.8377C3.4317 17.2094 2.1327 18.4954 2.1327 20.8734V28.4614H0.8477C0.3827 28.4614 -0.0003 28.8444 -0.0003 29.3094C-0.0003 29.7744 0.3827 30.1574 0.8477 30.1574ZM8.4217 14.1474C8.4217 12.8344 9.1877 12.0824 10.4587 12.0824H20.3297C21.6017 12.0824 22.3677 12.8344 22.3677 14.1474V17.2094H8.4217ZM15.3677 21.9674C13.4937 21.9674 12.8517 23.4854 11.2797 23.4854C9.8707 23.4854 9.1737 21.9674 7.3277 21.9674C5.7557 21.9674 4.9087 23.0754 3.8277 23.4034V20.9554C3.8277 19.6574 4.5937 18.9054 5.8657 18.9054H24.9237C26.1957 18.9054 26.9607 19.6574 26.9607 20.9554V23.4164C25.8397 23.1164 24.9927 21.9674 23.3927 21.9674C21.5467 21.9674 20.8497 23.4854 19.4547 23.4854C17.8827 23.4854 17.2267 21.9674 15.3677 21.9674ZM15.3677 23.6084C16.5707 23.6084 17.4867 25.1254 19.4547 25.1254C21.3687 25.1254 22.2307 23.6084 23.3927 23.6084C24.4457 23.6084 25.2797 24.8664 26.9607 25.0984V28.4614H3.8277V25.0844C5.4687 24.8384 6.2887 23.6084 7.3277 23.6084C8.4907 23.6084 9.3657 25.1254 11.2797 25.1254C13.2347 25.1254 14.1507 23.6084 15.3677 23.6084Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 32.145009788745696"
          className={className}
        >
          <path
            d="              M1.2987 32.1446H31.5547C32.2657 32.1446 32.8397 31.5576 32.8397 30.8466C32.8397 30.1356 32.2657 29.5476 31.5547 29.5476H30.5297V22.4516C30.5297 19.5536 29.0257 18.0626 26.0997 18.0626H25.7437V15.3426C25.7437 12.4576 24.2407 10.9676 21.3007 10.9676H17.3357V5.3486C17.9787 4.9926 18.4027 4.2406 18.4027 3.3516C18.4027 2.1076 18.0197 1.2876 17.3227 0.4946C16.8167 -0.1484 16.1057 -0.1484 15.5857 0.3986C14.9027 1.2326 14.4377 2.0536 14.4377 3.3516C14.4377 4.2266 14.8617 4.9656 15.4907 5.3346V10.9676H11.5387C8.6137 10.9676 7.0957 12.4576 7.0957 15.3426V18.0626H6.7537C3.8277 18.0626 2.3107 19.5536 2.3107 22.4516V29.5476H1.2987C0.5877 29.5476 -0.0003 30.1356 -0.0003 30.8466C-0.0003 31.5576 0.5877 32.1446 1.2987 32.1446ZM9.6937 15.4786C9.6937 14.1936 10.3637 13.5516 11.5797 13.5516H21.2737C22.4907 13.5516 23.1597 14.1936 23.1597 15.4786V18.0626H9.6937ZM16.4197 23.0536C14.4097 23.0536 13.7537 24.6396 12.1267 24.6396C10.7867 24.6396 10.0487 23.0536 8.0667 23.0536C6.6717 23.0536 5.7837 23.8466 4.9087 24.3246V22.5746C4.9087 21.3036 5.5777 20.6606 6.7947 20.6606H26.0587C27.2757 20.6606 27.9457 21.3036 27.9457 22.5746V24.3246C27.0707 23.8596 26.1677 23.0536 24.7737 23.0536C22.7907 23.0536 22.0667 24.6396 20.7127 24.6396C19.0997 24.6396 18.4297 23.0536 16.4197 23.0536ZM16.4197 25.3496C17.6637 25.3496 18.6207 26.9356 20.7127 26.9356C22.7367 26.9356 23.6247 25.3496 24.7737 25.3496C25.7167 25.3496 26.4827 26.4026 27.9457 26.7996V29.5476H4.9087V26.7996C6.3577 26.4026 7.1367 25.3496 8.0667 25.3496C9.2147 25.3496 10.1177 26.9356 12.1267 26.9356C14.2187 26.9356 15.1897 25.3496 16.4197 25.3496Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.486328125 30.969343783499934"
          className={className}
        >
          <path
            d="              M1.0937 30.9695H30.3927C30.9937 30.9695 31.4867 30.4635 31.4867 29.8615C31.4867 29.2605 30.9937 28.7685 30.3927 28.7685H29.3267V21.6455C29.3267 18.9385 27.9317 17.5575 25.1977 17.5575H24.6777V14.7405C24.6777 12.0335 23.2837 10.6525 20.5347 10.6525H16.4887V4.9925C17.1177 4.6785 17.5407 3.9675 17.5407 3.1335C17.5407 1.9575 17.1717 1.1915 16.5157 0.4265C16.0777 -0.1205 15.4907 -0.1345 15.0387 0.3445C14.3827 1.1375 13.9587 1.9165 13.9587 3.1335C13.9587 3.9535 14.3687 4.6505 14.9707 4.9795V10.6525H10.9647C8.2307 10.6525 6.8227 12.0335 6.8227 14.7405V17.5575H6.3027C3.5687 17.5575 2.1597 18.9385 2.1597 21.6455V28.7685H1.0937C0.4927 28.7685 -0.0003 29.2605 -0.0003 29.8615C-0.0003 30.4635 0.4927 30.9695 1.0937 30.9695ZM9.0237 14.8505C9.0237 13.5515 9.7477 12.8545 10.9927 12.8545H20.4937C21.7387 12.8545 22.4767 13.5515 22.4767 14.8505V17.5575H9.0237ZM15.7367 22.3015C13.7947 22.3015 13.1657 23.8325 11.5937 23.8325C10.2817 23.8325 9.5707 22.3015 7.6697 22.3015C6.1937 22.3015 5.3047 23.2445 4.3617 23.6545V21.7685C4.3617 20.4695 5.0857 19.7585 6.3297 19.7585H25.1567C26.4007 19.7585 27.1247 20.4695 27.1247 21.7685V23.6545C26.1817 23.2585 25.2927 22.3015 23.8027 22.3015C21.9027 22.3015 21.1917 23.8325 19.8787 23.8325C18.3067 23.8325 17.6637 22.3015 15.7367 22.3015ZM15.7367 24.4345C16.9257 24.4345 17.8687 25.9655 19.8787 25.9655C21.8207 25.9655 22.6817 24.4345 23.8027 24.4345C24.7737 24.4345 25.5527 25.5825 27.1247 25.8975V28.7685H4.3617V25.8835C5.9197 25.5685 6.6997 24.4345 7.6697 24.4345C8.7777 24.4345 9.6527 25.9655 11.5937 25.9655C13.6037 25.9655 14.5337 24.4345 15.7367 24.4345Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.87890625 33.03894092483029"
          className={className}
        >
          <path
            d="              M1.4497 33.0394H32.4297C33.2367 33.0394 33.8787 32.3824 33.8787 31.5894C33.8787 30.7964 33.2367 30.1544 32.4297 30.1544H31.4587V23.0584C31.4587 20.0234 29.8727 18.4514 26.7837 18.4514H26.5647V15.8124C26.5647 12.7774 24.9787 11.2054 21.9027 11.2054H17.9787V5.6264C18.6347 5.2304 19.0727 4.4514 19.0727 3.5354C19.0727 2.2364 18.6617 1.3614 17.9377 0.5414C17.3767 -0.1566 16.5707 -0.1696 16.0097 0.4454C15.2987 1.2924 14.8207 2.1674 14.8207 3.5354C14.8207 4.4374 15.2437 5.2034 15.8867 5.6134V11.2054H11.9907C8.9137 11.2054 7.3147 12.7774 7.3147 15.8124V18.4514H7.1097C4.0337 18.4514 2.4337 20.0234 2.4337 23.0584V30.1544H1.4497C0.6567 30.1544 -0.0003 30.7964 -0.0003 31.5894C-0.0003 32.3824 0.6567 33.0394 1.4497 33.0394ZM10.1997 15.9494C10.1997 14.6914 10.8277 14.1034 12.0317 14.1034H21.8617C23.0647 14.1034 23.6797 14.6914 23.6797 15.9494V18.4514H10.1997ZM16.9527 23.6324C14.8747 23.6324 14.2047 25.2734 12.5367 25.2734C11.1697 25.2734 10.4177 23.6324 8.3807 23.6324C7.0547 23.6324 6.1527 24.3434 5.3187 24.8224V23.1954C5.3187 21.9374 5.9477 21.3494 7.1507 21.3494H26.7427C27.9457 21.3494 28.5607 21.9374 28.5607 23.1954V24.8084C27.7267 24.3304 26.8377 23.6324 25.5257 23.6324C23.4887 23.6324 22.7227 25.2734 21.3687 25.2734C19.7017 25.2734 19.0317 23.6324 16.9527 23.6324ZM16.9527 26.0524C18.2247 26.0524 19.2087 27.6794 21.3687 27.6794C23.4477 27.6794 24.3497 26.0524 25.5257 26.0524C26.4277 26.0524 27.1937 27.0374 28.5607 27.4744V30.1544H5.3187V27.4884C6.6997 27.0504 7.4647 26.0524 8.3807 26.0524C9.5567 26.0524 10.4727 27.6794 12.5367 27.6794C14.6977 27.6794 15.6817 26.0524 16.9527 26.0524Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.83203125 29.07666015625"
          className={className}
        >
          <path
            d="              M0.5057 29.0769H29.3267C29.5997 29.0769 29.8317 28.8439 29.8317 28.5569C29.8317 28.2839 29.5997 28.0509 29.3267 28.0509H27.7407V19.8479C27.7407 17.9069 26.5917 16.7579 24.6367 16.7579H23.2287V13.1489C23.2287 11.1939 22.0797 10.0459 20.1247 10.0459H15.3127V4.3439C15.9417 4.1529 16.3927 3.5099 16.3927 2.7169C16.3927 1.7469 16.1057 1.1179 15.3947 0.2839C15.0797 -0.0991 14.8067 -0.0851 14.4927 0.2699C13.7817 1.0769 13.4397 1.7059 13.4397 2.7169C13.4397 3.4689 13.8497 4.0979 14.4377 4.3169V10.0459H9.7207C7.7657 10.0459 6.6177 11.1939 6.6177 13.1489V16.7579H5.2087C3.2537 16.7579 2.1057 17.9069 2.1057 19.8479V28.0509H0.5057C0.2327 28.0509 -0.0003 28.2839 -0.0003 28.5569C-0.0003 28.8439 0.2327 29.0769 0.5057 29.0769ZM7.6287 13.2039C7.6287 11.8779 8.4497 11.0709 9.7617 11.0709H20.0977C21.3967 11.0709 22.2167 11.8779 22.2167 13.2039V16.7579H7.6287ZM14.8747 21.5159C13.0977 21.5159 12.4277 23.0059 10.8557 23.0059C9.3377 23.0059 8.6547 21.5159 6.8907 21.5159C5.2227 21.5159 4.4847 22.8559 3.1307 22.9929V19.9029C3.1307 18.5769 3.9377 17.7699 5.2497 17.7699H24.5957C25.9087 17.7699 26.7287 18.5769 26.7287 19.9029V23.0059C25.3067 22.9239 24.5547 21.5159 22.8597 21.5159C21.0817 21.5159 20.3987 23.0059 18.8807 23.0059C17.3087 23.0059 16.6387 21.5159 14.8747 21.5159ZM14.8747 22.5139C16.1057 22.5139 17.0077 24.0049 18.8807 24.0049C20.7537 24.0049 21.6427 22.5139 22.8597 22.5139C24.0347 22.5139 24.9097 23.9359 26.7287 24.0049V28.0509H3.1307V24.0049C4.8677 23.8809 5.7287 22.5139 6.8907 22.5139C8.1077 22.5139 8.9827 24.0049 10.8557 24.0049C12.7427 24.0049 13.6447 22.5139 14.8747 22.5139Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.353515625 28.5144315617327"
          className={className}
        >
          <path
            d="              M0.3277 28.5147H29.0117C29.2027 28.5147 29.3537 28.3637 29.3537 28.1867C29.3537 27.9947 29.2027 27.8447 29.0117 27.8447H27.2757V19.3267C27.2757 17.5907 26.1957 16.5237 24.4727 16.5237H22.8047V12.6827C22.8047 10.9457 21.7387 9.8797 20.0017 9.8797H14.9567V4.1507C15.5997 4.0007 16.0647 3.3717 16.0647 2.6057C16.0647 1.6767 15.7907 1.0887 15.0667 0.2407C14.7927 -0.0873 14.6017 -0.0733 14.3277 0.2407C13.6177 1.0617 13.2887 1.6487 13.2887 2.6057C13.2887 3.3307 13.7127 3.9327 14.2737 4.1237V9.8797H9.3657C7.6287 9.8797 6.5627 10.9457 6.5627 12.6827V16.5237H4.8947C3.1717 16.5237 2.0917 17.5907 2.0917 19.3267V27.8447H0.3277C0.1507 27.8447 -0.0003 27.9947 -0.0003 28.1867C-0.0003 28.3637 0.1507 28.5147 0.3277 28.5147ZM7.2327 12.7097C7.2327 11.3837 8.0667 10.5497 9.3927 10.5497H19.9747C21.3007 10.5497 22.1347 11.3837 22.1347 12.7097V16.5237H7.2327ZM26.5507 22.7587C24.9787 22.7587 24.2947 21.2817 22.5727 21.2817C20.8497 21.2817 20.1657 22.7587 18.5937 22.7587C17.0217 22.7587 16.3377 21.2817 14.6157 21.2817C12.8927 21.2817 12.2087 22.7587 10.6507 22.7587C9.0647 22.7587 8.3947 21.2817 6.6717 21.2817C4.9627 21.2817 4.2927 22.7177 2.7617 22.7587V19.3547C2.7617 18.0277 3.5957 17.1937 4.9357 17.1937H24.4317C25.7577 17.1937 26.6057 18.0277 26.6057 19.3547V22.7587ZM14.6157 21.9517C15.8597 21.9517 16.7477 23.4417 18.5937 23.4417C20.4397 23.4417 21.3417 21.9517 22.5727 21.9517C23.8167 21.9517 24.7047 23.4417 26.5507 23.4417H26.6057V27.8447H2.7617V23.4417C4.5387 23.4417 5.4277 21.9517 6.6717 21.9517C7.9027 21.9517 8.7907 23.4417 10.6507 23.4417C12.4957 23.4417 13.3847 21.9517 14.6157 21.9517Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
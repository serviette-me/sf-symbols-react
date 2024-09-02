import { IconProps } from "../../types"

export default function CrossIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.302734375 34.302734375"
          className={className}
        >
          <path
            d="              M-0.0003 20.084C-0.0003 23.461 1.9687 25.416 5.3317 25.416H8.8867V28.971C8.8867 32.348 10.8557 34.303 14.2187 34.303H20.0977C23.4747 34.303 25.4297 32.348 25.4297 28.971V25.416H28.9707C32.3477 25.416 34.3027 23.461 34.3027 20.084V14.205C34.3027 10.842 32.3477 8.873 28.9707 8.873H25.4297V5.332C25.4297 1.969 23.4747 0 20.0977 0H14.2187C10.8557 0 8.8867 1.969 8.8867 5.332V8.873H5.3317C1.9687 8.873 -0.0003 10.842 -0.0003 14.205ZM5.2907 18.772V15.518C5.2907 14.697 5.6187 14.301 6.5077 14.301H14.3147V6.508C14.3147 5.619 14.7107 5.291 15.5317 5.291H18.7847C19.6057 5.291 20.0017 5.619 20.0017 6.508V14.301H27.7947C28.6837 14.301 29.0117 14.697 29.0117 15.518V18.772C29.0117 19.592 28.6837 19.988 27.7947 19.988H20.0017V27.795C20.0017 28.697 19.6057 29.025 18.7847 29.025H15.5317C14.7107 29.025 14.3147 28.697 14.3147 27.795V19.988H6.5077C5.6187 19.988 5.2907 19.592 5.2907 18.772Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.828125 31.828125"
          className={className}
        >
          <path
            d="              M-0.0003 18.4848C-0.0003 21.4648 1.5997 23.0778 4.5527 23.0778H8.7637V27.2758C8.7637 30.2288 10.3767 31.8278 13.3437 31.8278H18.4847C21.4647 31.8278 23.0777 30.2288 23.0777 27.2758V23.0778H27.2757C30.2147 23.0778 31.8277 21.4648 31.8277 18.4848V13.3438C31.8277 10.3628 30.2147 8.7638 27.2757 8.7638H23.0777V4.5528C23.0777 1.5998 21.4647 -0.0002 18.4847 -0.0002H13.3437C10.3767 -0.0002 8.7637 1.5998 8.7637 4.5528V8.7638H4.5527C1.5997 8.7638 -0.0003 10.3628 -0.0003 13.3438ZM3.7457 17.8148V14.0138C3.7457 13.0568 4.1977 12.5778 5.1957 12.5778H12.5777V5.1948C12.5777 4.1968 13.0567 3.7458 14.0137 3.7458H17.8147C18.7847 3.7458 19.2497 4.1968 19.2497 5.1948V12.5778H26.6187C27.6307 12.5778 28.0817 13.0568 28.0817 14.0138V17.8148C28.0817 18.7848 27.6307 19.2498 26.6187 19.2498H19.2497V26.6328C19.2497 27.6448 18.7847 28.0818 17.8147 28.0818H14.0137C13.0567 28.0818 12.5777 27.6448 12.5777 26.6328V19.2498H5.1957C4.1977 19.2498 3.7457 18.7848 3.7457 17.8148Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.126953125 33.140625"
          className={className}
        >
          <path
            d="              M-0.0003 19.3321C-0.0003 22.5171 1.7907 24.3091 4.9627 24.3091H8.8317V28.1781C8.8317 31.3501 10.6227 33.1411 13.8087 33.1411H19.3317C22.5177 33.1411 24.3227 31.3501 24.3227 28.1781V24.3091H28.1637C31.3357 24.3091 33.1267 22.5171 33.1267 19.3321V13.7951C33.1267 10.6231 31.3357 8.8181 28.1637 8.8181H24.3227V4.9631C24.3227 1.7911 22.5177 0.0001 19.3317 0.0001H13.8087C10.6227 0.0001 8.8317 1.7911 8.8317 4.9631V8.8181H4.9627C1.7907 8.8181 -0.0003 10.6231 -0.0003 13.7951ZM4.5527 18.3201V14.8071C4.5527 13.9181 4.9497 13.4941 5.8927 13.4941H13.4937V5.8921C13.4937 4.9491 13.9317 4.5531 14.8207 4.5531H18.3207C19.2227 4.5531 19.6467 4.9491 19.6467 5.8921V13.4941H27.2477C28.1917 13.4941 28.5747 13.9181 28.5747 14.8071V18.3201C28.5747 19.2091 28.1917 19.6461 27.2477 19.6461H19.6467V27.2481C19.6467 28.1911 19.2227 28.5741 18.3207 28.5741H14.8207C13.9317 28.5741 13.4937 28.1911 13.4937 27.2481V19.6461H5.8927C4.9497 19.6461 4.5527 19.2091 4.5527 18.3201Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M-0.0003 16.7483C-0.0003 18.9903 1.1757 20.1793 3.3907 20.1793H8.7087V25.4983C8.7087 27.6993 9.8987 28.8883 12.1407 28.8883H16.7477C18.9767 28.8883 20.1657 27.6993 20.1657 25.4983V20.1793H25.4847C27.6997 20.1793 28.8747 18.9903 28.8747 16.7483V12.1403C28.8747 9.9123 27.6997 8.7093 25.4847 8.7093H20.1657V3.3903C20.1657 1.1893 18.9767 0.0003 16.7477 0.0003H12.1407C9.8987 0.0003 8.7087 1.1893 8.7087 3.3903V8.7093H3.3907C1.1757 8.7093 -0.0003 9.9123 -0.0003 12.1403ZM1.6957 16.7073V12.1813C1.6957 11.0473 2.3377 10.4043 3.4867 10.4043H10.4047V3.4863C10.4047 2.3383 11.0467 1.6953 12.1817 1.6953H16.7067C17.8417 1.6953 18.4847 2.3383 18.4847 3.4863V10.4043H25.3887C26.5367 10.4043 27.1797 11.0473 27.1797 12.1813V16.7073C27.1797 17.8423 26.5367 18.4843 25.3887 18.4843H18.4847V25.4023C18.4847 26.5513 17.8417 27.1933 16.7067 27.1933H12.1817C11.0467 27.1933 10.4047 26.5513 10.4047 25.4023V18.4843H3.4867C2.3377 18.4843 1.6957 17.8423 1.6957 16.7073Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.228515625 30.255859375"
          className={className}
        >
          <path
            d="              M-0.0003 17.4729C-0.0003 20.1929 1.3677 21.5739 4.0467 21.5739H8.6817V26.1949C8.6817 28.8749 10.0627 30.2559 12.7837 30.2559H17.4587C20.1797 30.2559 21.5607 28.8749 21.5607 26.1949V21.5739H26.1817C28.8617 21.5739 30.2287 20.1929 30.2287 17.4729V12.7829C30.2287 10.0759 28.8617 8.6949 26.1817 8.6949H21.5607V4.0609C21.5607 1.3809 20.1797 -0.0001 17.4587 -0.0001H12.7837C10.0627 -0.0001 8.6817 1.3809 8.6817 4.0609V8.6949H4.0467C1.3677 8.6949 -0.0003 10.0759 -0.0003 12.7829ZM2.7617 17.2129V13.0569C2.7617 12.0039 3.2817 11.4709 4.3617 11.4709H11.4567V4.3609C11.4567 3.2949 11.9907 2.7619 13.0427 2.7619H17.1997C18.2517 2.7619 18.7847 3.2949 18.7847 4.3609V11.4709H25.8677C26.9477 11.4709 27.4807 12.0039 27.4807 13.0569V17.2129C27.4807 18.2659 26.9477 18.7849 25.8677 18.7849H18.7847V25.8949C18.7847 26.9609 18.2517 27.4939 17.1997 27.4939H13.0427C11.9907 27.4939 11.4567 26.9609 11.4567 25.8949V18.7849H4.3617C3.2817 18.7849 2.7617 18.2659 2.7617 17.2129Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.33984375 29.353515625"
          className={className}
        >
          <path
            d="              M-0.0003 16.8987C-0.0003 19.4687 1.2437 20.7267 3.7737 20.7267H8.6267V25.5797C8.6267 28.1097 9.8847 29.3537 12.4547 29.3537H16.8847C19.4547 29.3537 20.7127 28.1097 20.7127 25.5797V20.7267H25.5667C28.0957 20.7267 29.3397 19.4687 29.3397 16.8987V12.4687C29.3397 9.8987 28.0957 8.6407 25.5667 8.6407H20.7127V3.7737C20.7127 1.2437 19.4547 -0.0003 16.8847 -0.0003H12.4547C9.8847 -0.0003 8.6267 1.2437 8.6267 3.7737V8.6407H3.7737C1.2437 8.6407 -0.0003 9.8987 -0.0003 12.4687ZM2.2017 16.8577V12.5097C2.2017 11.4027 2.7757 10.8417 3.8967 10.8417H10.8277V3.8967C10.8277 2.7757 11.3887 2.2007 12.4957 2.2007H16.8437C17.9517 2.2007 18.5117 2.7757 18.5117 3.8967V10.8417H25.4437C26.5647 10.8417 27.1387 11.4027 27.1387 12.5097V16.8577C27.1387 17.9647 26.5647 18.5257 25.4437 18.5257H18.5117V25.4707C18.5117 26.5917 17.9517 27.1527 16.8437 27.1527H12.4957C11.3887 27.1527 10.8277 26.5917 10.8277 25.4707V18.5257H3.8967C2.7757 18.5257 2.2017 17.9647 2.2017 16.8577Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.912109375 30.92578125"
          className={className}
        >
          <path
            d="              M-0.0003 17.9097C-0.0003 20.7407 1.4767 22.2167 4.2657 22.2167H8.7087V26.6607C8.7087 29.4627 10.1997 30.9257 13.0157 30.9257H17.9097C20.7267 30.9257 22.2167 29.4627 22.2167 26.6607V22.2167H26.6467C29.4497 22.2167 30.9117 20.7407 30.9117 17.9097V13.0297C30.9117 10.1997 29.4497 8.7227 26.6467 8.7227H22.2167V4.2657C22.2167 1.4767 20.7267 -0.0003 17.9097 -0.0003H13.0157C10.1997 -0.0003 8.7087 1.4767 8.7087 4.2657V8.7227H4.2657C1.4767 8.7227 -0.0003 10.1997 -0.0003 13.0297ZM3.1857 17.4727V13.4667C3.1857 12.4547 3.6777 11.9497 4.7167 11.9497H11.9357V4.7307C11.9357 3.6777 12.4417 3.1857 13.4667 3.1857H17.4587C18.4847 3.1857 18.9907 3.6777 18.9907 4.7307V11.9497H26.1957C27.2477 11.9497 27.7407 12.4547 27.7407 13.4667V17.4727C27.7407 18.4847 27.2477 18.9907 26.1957 18.9907H18.9907V26.2087C18.9907 27.2617 18.4847 27.7537 17.4587 27.7537H13.4667C12.4417 27.7537 11.9357 27.2617 11.9357 26.2087V18.9907H4.7167C3.6777 18.9907 3.1857 18.4847 3.1857 17.4727Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.259765625 28.259765625"
          className={className}
        >
          <path
            d="              M-0.0003 16.5428C-0.0003 18.3338 1.1077 19.4418 2.8847 19.4418H8.8187V25.3748C8.8187 27.1528 9.9257 28.2598 11.7167 28.2598H16.5567C18.3617 28.2598 19.4547 27.1528 19.4547 25.3748V19.4418H25.3747C27.1657 19.4418 28.2597 18.3338 28.2597 16.5428V11.7028C28.2597 9.8988 27.1657 8.8048 25.3747 8.8048H19.4547V2.8848C19.4547 1.0938 18.3617 -0.0002 16.5567 -0.0002H11.7167C9.9257 -0.0002 8.8187 1.0938 8.8187 2.8848V8.8048H2.8847C1.1077 8.8048 -0.0003 9.8988 -0.0003 11.7028ZM1.0117 16.5018V11.7308C1.0117 10.5688 1.7637 9.8168 2.9397 9.8168H9.8297V2.9398C9.8297 1.7638 10.5817 1.0118 11.7577 1.0118H16.5297C17.6917 1.0118 18.4437 1.7638 18.4437 2.9398V9.8168H25.3207C26.4957 9.8168 27.2477 10.5688 27.2477 11.7308V16.5018C27.2477 17.6778 26.4957 18.4298 25.3207 18.4298H18.4437V25.3208C18.4437 26.4958 17.6917 27.2478 16.5297 27.2478H11.7577C10.5817 27.2478 9.8297 26.4958 9.8297 25.3208V18.4298H2.9397C1.7637 18.4298 1.0117 17.6778 1.0117 16.5018Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.9453125 27.9453125"
          className={className}
        >
          <path
            d="              M-0.0003 16.4474C-0.0003 18.0194 1.0667 19.0864 2.6247 19.0864H8.8727V25.3204C8.8727 26.8924 9.9257 27.9454 11.4977 27.9454H16.4607C18.0337 27.9454 19.0997 26.8924 19.0997 25.3204V19.0864H25.3207C26.8927 19.0864 27.9457 18.0194 27.9457 16.4474V11.4844C27.9457 9.9124 26.8927 8.8594 25.3207 8.8594H19.0997V2.6384C19.0997 1.0664 18.0337 0.0004 16.4607 0.0004H11.4977C9.9257 0.0004 8.8727 1.0664 8.8727 2.6384V8.8594H2.6247C1.0667 8.8594 -0.0003 9.9124 -0.0003 11.4844ZM0.6697 16.4194V11.5114C0.6697 10.3364 1.4767 9.5294 2.6657 9.5294H9.5427V2.6664C9.5427 1.4764 10.3497 0.6694 11.5387 0.6694H16.4337C17.6227 0.6694 18.4297 1.4764 18.4297 2.6664V9.5294H25.2797C26.4687 9.5294 27.2757 10.3364 27.2757 11.5114V16.4194C27.2757 17.6094 26.4687 18.4164 25.2797 18.4164H18.4297V25.2794C18.4297 26.4684 17.6227 27.2754 16.4337 27.2754H11.5387C10.3497 27.2754 9.5427 26.4684 9.5427 25.2794V18.4164H2.6657C1.4767 18.4164 0.6697 17.6094 0.6697 16.4194Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
import { IconProps } from "../../types"

export default function AlignVerticalCenterFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.4765625 30.40625"
          className={className}
        >
          <path
            d="              M2.2967 17.486H3.5137V26.223C3.5137 28.752 5.1407 30.406 7.6287 30.406H13.1117C15.5857 30.406 17.2127 28.752 17.2127 26.223V17.486H19.3317V21.82C19.3317 24.336 20.9727 25.99 23.4607 25.99H28.9297C31.4047 25.99 33.0447 24.336 33.0447 21.82V17.486H34.1937C35.4377 17.486 36.4767 16.447 36.4767 15.203C36.4767 13.932 35.4377 12.893 34.1937 12.893H33.0447V8.572C33.0447 6.07 31.4047 4.416 28.9297 4.416H23.4607C20.9727 4.416 19.3317 6.07 19.3317 8.572V12.893H17.2127V4.156C17.2127 1.654 15.5857 0 13.1117 0H7.6287C5.1407 0 3.5137 1.654 3.5137 4.156V12.893H2.2967C1.0257 12.893 -0.0003 13.932 -0.0003 15.203C-0.0003 16.447 1.0257 17.486 2.2967 17.486Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.083984375 28.341796875"
          className={className}
        >
          <path
            d="              M1.6267 15.8049H3.5687V24.6779C3.5687 26.9609 4.9217 28.3419 7.1637 28.3419H12.2777C14.5197 28.3419 15.8727 26.9609 15.8727 24.6779V15.8049H18.2517V20.0569C18.2517 22.3259 19.6187 23.7069 21.8617 23.7069H26.9747C29.2027 23.7069 30.5707 22.3259 30.5707 20.0569V15.8049H32.4707C33.3597 15.8049 34.0837 15.0529 34.0837 14.1639C34.0837 13.2619 33.3597 12.5099 32.4707 12.5099H30.5707V8.2719C30.5707 6.0019 29.2027 4.6209 26.9747 4.6209H21.8617C19.6187 4.6209 18.2517 6.0019 18.2517 8.2719V12.5099H15.8727V3.6509C15.8727 1.3669 14.5197 -0.0001 12.2777 -0.0001H7.1637C4.9217 -0.0001 3.5687 1.3669 3.5687 3.6509V12.5099H1.6267C0.7247 12.5099 -0.0003 13.2619 -0.0003 14.1639C-0.0003 15.0529 0.7247 15.8049 1.6267 15.8049Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.341796875 29.435546875"
          className={className}
        >
          <path
            d="              M1.9827 16.7075H3.5407V25.4985C3.5407 27.9185 5.0447 29.4355 7.4097 29.4355H12.7147C15.0797 29.4355 16.5837 27.9185 16.5837 25.4985V16.7075H18.8267V21.0005C18.8267 23.3925 20.3297 24.9235 22.7087 24.9235H28.0137C30.3657 24.9235 31.8687 23.3925 31.8687 21.0005V16.7075H33.3727C34.4527 16.7075 35.3417 15.8045 35.3417 14.7245C35.3417 13.6305 34.4527 12.7145 33.3727 12.7145H31.8687V8.4355C31.8687 6.0435 30.3657 4.5255 28.0137 4.5255H22.7087C20.3297 4.5255 18.8267 6.0435 18.8267 8.4355V12.7145H16.5837V3.9235C16.5837 1.5315 15.0797 0.0005 12.7147 0.0005H7.4097C5.0447 0.0005 3.5407 1.5315 3.5407 3.9235V12.7145H1.9827C0.8887 12.7145 -0.0003 13.6305 -0.0003 14.7245C-0.0003 15.8045 0.8887 16.7075 1.9827 16.7075Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.720703125 25.306640625"
          className={className}
        >
          <path
            d="              M0.7517 13.4262H3.4997V22.6132C3.4997 24.3222 4.4707 25.3062 6.1387 25.3062H11.2797C12.9607 25.3062 13.9177 24.3222 13.9177 22.6132V13.4262H16.8437V17.9372C16.8437 19.6462 17.8007 20.6172 19.4827 20.6172H24.6097C26.2907 20.6172 27.2477 19.6462 27.2477 17.9372V13.4262H29.9827C30.3927 13.4262 30.7207 13.0562 30.7207 12.6462C30.7207 12.2222 30.3927 11.8672 29.9827 11.8672H27.2477V7.3422C27.2477 5.6462 26.2907 4.6762 24.6097 4.6762H19.4827C17.8007 4.6762 16.8437 5.6462 16.8437 7.3422V11.8672H13.9177V2.6662C13.9177 0.9702 12.9607 0.0002 11.2797 0.0002H6.1387C4.4707 0.0002 3.4997 0.9702 3.4997 2.6662V11.8672H0.7517C0.3277 11.8672 -0.0003 12.2222 -0.0003 12.6462C-0.0003 13.0562 0.3277 13.4262 0.7517 13.4262Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.552734375 27.015625"
          className={className}
        >
          <path
            d="              M1.1897 14.7383H3.5957V23.6933C3.5957 25.8123 4.7847 27.0153 6.8637 27.0153H11.7577C13.8357 27.0153 15.0117 25.8123 15.0117 23.6933V14.7383H17.5687V18.9222C17.5687 21.0412 18.7437 22.2443 20.8357 22.2443H25.7167C27.7947 22.2443 28.9847 21.0412 28.9847 18.9222V14.7383H31.3637C32.0337 14.7383 32.5527 14.1643 32.5527 13.5083C32.5527 12.8383 32.0337 12.2633 31.3637 12.2633H28.9847V8.0803C28.9847 5.9613 27.7947 4.7712 25.7167 4.7712H20.8357C18.7437 4.7712 17.5687 5.9613 17.5687 8.0803V12.2633H15.0117V3.3223C15.0117 1.2033 13.8357 0.0003 11.7577 0.0003H6.8637C4.7847 0.0003 3.5957 1.2033 3.5957 3.3223V12.2633H1.1897C0.5337 12.2633 -0.0003 12.8383 -0.0003 13.5083C-0.0003 14.1643 0.5337 14.7383 1.1897 14.7383Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.69140625 26.27734375"
          className={className}
        >
          <path
            d="              M0.9567 14.1368H3.6227V23.1188C3.6227 25.1568 4.7027 26.2778 6.6997 26.2778H11.4567C13.4527 26.2778 14.5337 25.1568 14.5337 23.1188V14.1368H17.1717V18.2798C17.1717 20.3168 18.2657 21.4098 20.2617 21.4098H25.0197C27.0017 21.4098 28.0957 20.3168 28.0957 18.2798V14.1368H30.7477C31.2817 14.1368 31.6917 13.6578 31.6917 13.1248C31.6917 12.5918 31.2817 12.1268 30.7477 12.1268H28.0957V7.9708C28.0957 5.9338 27.0017 4.8397 25.0197 4.8397H20.2617C18.2657 4.8397 17.1717 5.9338 17.1717 7.9708V12.1268H14.5337V3.1307C14.5337 1.0938 13.4527 -0.0003 11.4567 -0.0003H6.6997C4.7027 -0.0003 3.6227 1.0938 3.6227 3.1307V12.1268H0.9567C0.4097 12.1268 -0.0003 12.5918 -0.0003 13.1248C-0.0003 13.6578 0.4097 14.1368 0.9567 14.1368Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.22265625 27.58984375"
          className={className}
        >
          <path
            d="              M1.3807 15.2034H3.5817V24.1174C3.5817 26.3044 4.8397 27.5894 6.9997 27.5894H11.9767C14.1227 27.5894 15.3807 26.3044 15.3807 24.1174V15.2034H17.8687V19.4144C17.8687 21.6014 19.1267 22.8734 21.2737 22.8734H26.2637C28.4097 22.8734 29.6677 21.6014 29.6677 19.4144V15.2034H31.8417C32.6077 15.2034 33.2227 14.5464 33.2227 13.7814C33.2227 13.0154 32.6077 12.3734 31.8417 12.3734H29.6677V8.1624C29.6677 5.9744 28.4097 4.7034 26.2637 4.7034H21.2737C19.1267 4.7034 17.8687 5.9744 17.8687 8.1624V12.3734H15.3807V3.4594C15.3807 1.2714 14.1227 0.0004 11.9767 0.0004H6.9997C4.8397 0.0004 3.5817 1.2714 3.5817 3.4594V12.3734H1.3807C0.6157 12.3734 -0.0003 13.0154 -0.0003 13.7814C-0.0003 14.5464 0.6157 15.2034 1.3807 15.2034Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.435546875 24.021484375"
          className={className}
        >
          <path
            d="              M5.4137 24.0213H11.0337C12.2907 24.0213 13.0977 23.2283 13.0977 21.9573V12.4963H16.4067V17.4863C16.4067 18.7573 17.1997 19.5503 18.4567 19.5503H24.0897C25.3477 19.5503 26.1407 18.7573 26.1407 17.4863V12.4963H28.9567C29.2167 12.4963 29.4357 12.2773 29.4357 12.0043C29.4357 11.7443 29.2167 11.5253 28.9567 11.5253H26.1407V6.5353C26.1407 5.2633 25.3477 4.4573 24.0897 4.4573H18.4567C17.1997 4.4573 16.4067 5.2633 16.4067 6.5353V11.5253H13.0977V2.0643C13.0977 0.7933 12.2907 0.0003 11.0337 0.0003H5.4137C4.1427 0.0003 3.3497 0.7933 3.3497 2.0643V11.5253H0.4787C0.2187 11.5253 -0.0003 11.7443 -0.0003 12.0043C-0.0003 12.2773 0.2187 12.4963 0.4787 12.4963H3.3497V21.9573C3.3497 23.2283 4.1427 24.0213 5.4137 24.0213Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.779296875 23.365234375"
          className={className}
        >
          <path
            d="              M5.0317 23.3652H10.9097C11.9627 23.3652 12.6737 22.6542 12.6737 21.6012V12.0172H16.1737V17.2542C16.1737 18.2932 16.8847 19.0042 17.9377 19.0042H23.8167C24.8687 19.0042 25.5667 18.2932 25.5667 17.2542V12.0172H28.4377C28.6287 12.0172 28.7797 11.8672 28.7797 11.6762C28.7797 11.4982 28.6287 11.3342 28.4377 11.3342H25.5667V6.0972C25.5667 5.0582 24.8687 4.3472 23.8167 4.3472H17.9377C16.8847 4.3472 16.1737 5.0582 16.1737 6.0972V11.3342H12.6737V1.7502C12.6737 0.6972 11.9627 0.0002 10.9097 0.0002H5.0317C3.9787 0.0002 3.2677 0.6972 3.2677 1.7502V11.3342H0.3417C0.1507 11.3342 -0.0003 11.4982 -0.0003 11.6762C-0.0003 11.8672 0.1507 12.0172 0.3417 12.0172H3.2677V21.6012C3.2677 22.6542 3.9787 23.3652 5.0317 23.3652Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

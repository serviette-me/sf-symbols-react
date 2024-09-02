import { IconProps } from "../../types"

export default function SquareCircleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.9507 21.2321H18.9077C20.3297 21.2321 21.2457 20.3161 21.2457 18.8941V10.8961C21.2457 9.5021 20.3297 8.5991 18.9077 8.5991H10.9507C9.5567 8.5991 8.6137 9.5161 8.6137 10.8961V18.8941C8.6137 20.3031 9.5567 21.2321 10.9507 21.2321ZM12.4007 17.8421C12.1677 17.8421 12.0177 17.6781 12.0177 17.4451V12.3871C12.0177 12.1541 12.1677 11.9901 12.4007 11.9901H17.4587C17.6917 11.9901 17.8557 12.1541 17.8557 12.3871V17.4451C17.8557 17.6781 17.6917 17.8421 17.4587 17.8421Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM9.9117 21.0276H18.9627C20.3027 21.0276 21.0407 20.2476 21.0407 18.8396V9.8846C21.0407 8.5726 20.3027 7.8476 18.9627 7.8476H9.9117C8.6677 7.8476 7.8477 8.6546 7.8477 9.8846V18.8396C7.8477 20.1526 8.6677 21.0276 9.9117 21.0276ZM11.0607 18.3336C10.7597 18.3336 10.5407 18.1286 10.5407 17.8146V11.0606C10.5407 10.7456 10.7597 10.5406 11.0607 10.5406H17.8147C18.1287 10.5406 18.3337 10.7456 18.3337 11.0606V17.8146C18.3337 18.1286 18.1287 18.3336 17.8147 18.3336Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM10.4727 21.1504H18.9357C20.3167 21.1504 21.1507 20.2894 21.1507 18.8804V10.4314C21.1507 9.0644 20.3167 8.2444 18.9357 8.2444H10.4727C9.1467 8.2444 8.2577 9.1194 8.2577 10.4314V18.8804C8.2577 20.2344 9.1467 21.1504 10.4727 21.1504ZM11.7717 18.0744C11.4977 18.0744 11.3207 17.8964 11.3207 17.6234V11.7714C11.3207 11.4984 11.4977 11.3064 11.7717 11.3064H17.6367C17.8967 11.3064 18.0877 11.4984 18.0877 11.7714V17.6234C18.0877 17.8964 17.8967 18.0744 17.6367 18.0744Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM8.7087 20.59H18.7307C19.9477 20.59 20.5757 19.879 20.5757 18.566V8.682C20.5757 7.479 19.9477 6.85 18.7307 6.85H8.7087C7.5877 6.85 6.8497 7.588 6.8497 8.682V18.566C6.8497 19.77 7.5877 20.59 8.7087 20.59ZM9.2697 19.031C8.7497 19.031 8.4077 18.676 8.4077 18.156V9.27C8.4077 8.75 8.7497 8.395 9.2697 8.395H18.1567C18.6757 8.395 19.0317 8.75 19.0317 9.27V18.156C19.0317 18.676 18.6757 19.031 18.1567 19.031Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM9.2557 20.8901H18.9907C20.2757 20.8901 20.8907 20.1931 20.8907 18.7991V9.2151C20.8907 7.9711 20.2757 7.3551 18.9907 7.3551H9.2557C8.1077 7.3551 7.3557 8.1071 7.3557 9.2151V18.7991C7.3557 20.0561 8.1077 20.8901 9.2557 20.8901ZM10.1987 18.6481C9.8437 18.6481 9.5977 18.4021 9.5977 18.0331V10.2131C9.5977 9.8441 9.8437 9.5981 10.1987 9.5981H18.0467C18.4027 9.5981 18.6487 9.8441 18.6487 10.2131V18.0331C18.6487 18.4021 18.4027 18.6481 18.0467 18.6481Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM8.8727 20.8224H19.0177C20.2617 20.8224 20.8227 20.1524 20.8227 18.7714V8.8454C20.8227 7.6284 20.2617 7.0684 19.0177 7.0684H8.8727C7.7927 7.0684 7.0687 7.7934 7.0687 8.8454V18.7714C7.0687 19.9884 7.7927 20.8224 8.8727 20.8224ZM9.7207 18.8264C9.3377 18.8264 9.0647 18.5524 9.0647 18.1564V9.7344C9.0647 9.3374 9.3377 9.0644 9.7207 9.0644H18.1697C18.5527 9.0644 18.8257 9.3374 18.8257 9.7344V18.1564C18.8257 18.5524 18.5527 18.8264 18.1697 18.8264Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM9.5427 20.9589H18.9767C20.2887 20.9589 20.9587 20.2069 20.9587 18.8129V9.5019C20.9587 8.2309 20.2887 7.5609 18.9767 7.5609H9.5427C8.3537 7.5609 7.5607 8.3399 7.5607 9.5019V18.8129C7.5607 20.0979 8.3537 20.9589 9.5427 20.9589ZM10.5687 18.5119C10.2407 18.5119 10.0077 18.2789 10.0077 17.9379V10.5819C10.0077 10.2399 10.2407 10.0079 10.5687 10.0079H17.9507C18.2797 10.0079 18.5117 10.2399 18.5117 10.5819V17.9379C18.5117 18.2789 18.2797 18.5119 17.9507 18.5119Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM8.4627 20.2892H18.3477C19.5367 20.2892 20.2757 19.5232 20.2757 18.3062V8.4632C20.2757 7.2872 19.5367 6.5492 18.3477 6.5492H8.4627C7.3147 6.5492 6.5487 7.3142 6.5487 8.4632V18.3062C6.5487 19.4962 7.3147 20.2892 8.4627 20.2892ZM8.6677 19.3182C7.9847 19.3182 7.5197 18.8402 7.5197 18.1562V8.6812C7.5197 7.9842 7.9847 7.5192 8.6677 7.5192H18.1427C18.8257 7.5192 19.2907 7.9842 19.2907 8.6812V18.1562C19.2907 18.8402 18.8257 19.3182 18.1427 19.3182Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM8.3537 20.1251H18.1567C19.3187 20.1251 20.1117 19.3321 20.1117 18.1701V8.3401C20.1117 7.1781 19.3187 6.3851 18.1567 6.3851H8.3537C7.1777 6.3851 6.3987 7.1781 6.3987 8.3401V18.1701C6.3987 19.3321 7.1777 20.1251 8.3537 20.1251ZM8.3667 19.4411C7.6017 19.4411 7.0687 18.9221 7.0687 18.1421V8.3671C7.0687 7.5881 7.6017 7.0681 8.3667 7.0681H18.1287C18.9077 7.0681 19.4417 7.5881 19.4417 8.3671V18.1421C19.4417 18.9221 18.9077 19.4411 18.1287 19.4411Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

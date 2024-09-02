import { IconProps } from "../../types"

export default function AtCircleFillIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM15.3257 22.8731C10.3637 22.8731 7.0547 19.7151 7.0547 14.9161C7.0547 10.1311 10.2947 6.9591 15.1347 6.9591C19.8377 6.9591 22.9547 9.8711 22.9547 14.2461C22.9547 17.1031 21.3007 19.0581 18.8127 19.0581C17.6097 19.0581 16.7067 18.5801 16.3657 17.8691C15.9137 18.6761 15.1757 19.0861 14.1637 19.0721C12.0997 19.0721 10.7457 17.4181 10.7457 14.9301C10.7457 12.5641 12.0447 10.9651 13.9867 10.9651C14.9437 10.9651 15.7227 11.3751 16.1327 12.1271V12.0991C16.1327 11.4301 16.6657 10.9651 17.4457 10.9651C18.3337 10.9651 18.9357 11.5391 18.9357 12.4281V15.8871C18.9357 16.4061 19.0997 16.6521 19.4137 16.6521C19.9477 16.6521 20.5347 15.8181 20.5347 14.2601C20.5347 11.2661 18.3207 9.2691 15.1347 9.2691C11.7577 9.2691 9.4887 11.5531 9.4887 14.9571C9.4887 18.4021 11.8397 20.5491 15.5727 20.5491C15.7227 20.5491 15.8317 20.5351 16.1327 20.5081C16.4747 20.5081 16.9527 20.4801 17.2267 20.4801C17.9507 20.4801 18.4157 20.9041 18.4157 21.5471C18.4157 22.1071 18.1287 22.4221 17.6367 22.6271C17.0757 22.8321 16.2417 22.8731 15.3257 22.8731ZM14.8617 16.5291C15.4907 16.5291 15.8457 16.0101 15.8457 15.0121C15.8457 14.0271 15.4767 13.4671 14.8747 13.4671C14.2867 13.4671 13.9317 14.0271 13.9317 15.0121C13.9317 16.0101 14.2737 16.5291 14.8617 16.5291Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.7247 22.6406C9.7207 22.6406 6.3847 19.3726 6.3847 14.4516C6.3847 9.5296 9.7067 6.2206 14.6157 6.2206C19.3727 6.2206 22.5857 9.2286 22.5857 13.6856C22.5857 16.7066 21.0137 18.7716 18.6347 18.7716C17.4727 18.7716 16.5837 18.2796 16.2147 17.4996C15.7227 18.3336 14.8887 18.7856 13.8637 18.7716C11.7307 18.7716 10.2947 17.0216 10.2947 14.4646C10.2947 11.9906 11.7027 10.2536 13.7537 10.2536C14.6837 10.2536 15.4907 10.6776 15.9687 11.3616V11.2106C15.9687 10.7046 16.4067 10.2536 17.0627 10.2536C17.8007 10.2536 18.2797 10.7456 18.2797 11.4846V15.8186C18.2797 16.4066 18.5257 16.7066 19.0177 16.7066C19.8107 16.7066 20.4527 15.5856 20.4527 13.7266C20.4527 10.4586 18.0737 8.2856 14.6157 8.2856C10.9917 8.2856 8.5727 10.7876 8.5727 14.4926C8.5727 18.2246 11.0327 20.5626 14.9707 20.5626C15.5727 20.5626 16.0097 20.4806 16.6247 20.3576C16.8847 20.3296 17.1987 20.3026 17.3907 20.3026C17.9787 20.3026 18.3887 20.6996 18.3887 21.2456C18.3887 21.7656 18.0877 22.1076 17.5547 22.2986C16.8707 22.5446 15.8187 22.6406 14.7247 22.6406ZM14.3827 16.5566C15.2847 16.5566 15.8727 15.7906 15.8727 14.4646C15.8727 13.1656 15.2847 12.4006 14.3827 12.4006C13.4937 12.4006 12.9337 13.1796 12.9337 14.4786C12.9337 15.8046 13.4807 16.5566 14.3827 16.5566Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM15.0387 22.7634C10.0627 22.7634 6.7407 19.5504 6.7407 14.7114C6.7407 9.8574 10.0077 6.6174 14.9027 6.6174C19.6187 6.6174 22.7777 9.5704 22.7777 13.9864C22.7777 16.9254 21.1637 18.9354 18.7307 18.9354C17.5407 18.9354 16.6527 18.4434 16.2967 17.7054C15.8187 18.5254 15.0387 18.9494 14.0137 18.9354C11.9217 18.9354 10.5277 17.2404 10.5277 14.7244C10.5277 12.3044 11.8807 10.6364 13.8767 10.6364C14.8207 10.6364 15.6137 11.0604 16.0507 11.7714V11.6894C16.0507 11.1014 16.5427 10.6364 17.2677 10.6364C18.0877 10.6364 18.6207 11.1704 18.6207 11.9904V15.8594C18.6207 16.4064 18.8257 16.6794 19.2367 16.6794C19.8787 16.6794 20.4937 15.7224 20.4937 14.0134C20.4937 10.8964 18.2107 8.8044 14.8887 8.8044C11.4027 8.8044 9.0507 11.1974 9.0507 14.7384C9.0507 18.3344 11.4567 20.5624 15.2847 20.5624C15.6547 20.5624 15.9137 20.5214 16.3657 20.4534C16.6657 20.4254 17.0627 20.3984 17.3087 20.3984C17.9647 20.3984 18.4027 20.8224 18.4027 21.4104C18.4027 21.9574 18.1017 22.2854 17.5957 22.4764C16.9807 22.7094 16.0367 22.7634 15.0387 22.7634ZM14.6427 16.5564C15.3947 16.5564 15.8597 15.9144 15.8597 14.7524C15.8597 13.6304 15.3807 12.9744 14.6427 12.9744C13.9177 12.9744 13.4527 13.6304 13.4527 14.7654C13.4527 15.9144 13.9047 16.5564 14.6427 16.5564Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.8357 22.094C8.8867 22.094 5.5097 18.689 5.5097 13.686C5.5097 8.736 8.9417 5.277 13.8497 5.277C18.6077 5.277 21.9157 8.395 21.9157 12.92C21.9157 16.092 20.5487 18.17 18.3747 18.17C17.2127 18.17 16.3517 17.582 15.9957 16.652C15.4487 17.609 14.5467 18.156 13.3987 18.156C11.2517 18.156 9.7617 16.352 9.7617 13.754C9.7617 11.184 11.2517 9.365 13.3707 9.365C14.3687 9.365 15.2577 9.844 15.7907 10.568V9.994C15.7907 9.693 16.0777 9.365 16.4887 9.365C16.9257 9.365 17.2267 9.68 17.2267 10.145V15.367C17.2267 16.283 17.6777 16.803 18.4977 16.803C19.7007 16.803 20.4667 15.34 20.4667 12.947C20.4667 9.229 17.7737 6.699 13.8357 6.699C9.8167 6.699 7.0277 9.584 7.0277 13.713C7.0277 17.924 9.7617 20.658 13.9997 20.658C15.0797 20.658 15.9137 20.508 16.7477 20.344C16.9117 20.303 17.0627 20.262 17.1857 20.262C17.5547 20.262 17.8417 20.535 17.8417 20.918C17.8417 21.287 17.5957 21.561 17.1447 21.711C16.4067 21.957 15.2167 22.094 13.8357 22.094ZM13.6167 16.68C14.9707 16.68 15.8457 15.518 15.8457 13.658C15.8457 11.867 14.9847 10.76 13.6307 10.76C12.3047 10.76 11.3887 11.949 11.3887 13.727C11.3887 15.518 12.2777 16.68 13.6167 16.68Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.3417 22.4761C9.3107 22.4761 5.9477 19.1401 5.9477 14.1501C5.9477 9.1461 9.3237 5.7281 14.2867 5.7281C19.0727 5.7281 22.3537 8.8181 22.3537 13.3161C22.3537 16.4471 20.8227 18.5801 18.5117 18.5801C17.3767 18.5801 16.5017 18.0741 16.1187 17.2541C15.5857 18.1011 14.7107 18.5801 13.6717 18.5801C11.4977 18.5801 9.9937 16.7621 9.9937 14.1501C9.9937 11.5941 11.4847 9.8031 13.6037 9.8031C14.5197 9.8031 15.3537 10.2261 15.8597 10.8551V10.6371C15.8597 10.2401 16.2557 9.8031 16.8167 9.8031C17.4457 9.8031 17.8687 10.2261 17.8687 10.8831V15.7641C17.8687 16.3921 18.1697 16.7341 18.7717 16.7341C19.7147 16.7341 20.3987 15.4351 20.3987 13.3711C20.3987 9.9391 17.9237 7.6421 14.2737 7.6421C10.5137 7.6421 7.9847 10.2811 7.9847 14.1911C7.9847 18.1151 10.5137 20.5621 14.5877 20.5621C15.4767 20.5621 16.1187 20.4391 16.9397 20.2481C17.1447 20.2211 17.3497 20.1801 17.4997 20.1801C18.0057 20.1801 18.3887 20.5491 18.3887 21.0551C18.3887 21.5331 18.0607 21.8891 17.4997 22.0941C16.7347 22.3401 15.5587 22.4761 14.3417 22.4761ZM14.0687 16.5701C15.1617 16.5701 15.8727 15.6401 15.8727 14.1091C15.8727 12.6191 15.1617 11.7171 14.0687 11.7171C13.0017 11.7171 12.3047 12.6331 12.3047 14.1371C12.3047 15.6541 12.9887 16.5701 14.0687 16.5701Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM14.1227 22.3944C9.0777 22.3944 5.7007 19.0174 5.7007 13.9724C5.7007 8.9274 9.1187 5.4554 14.0957 5.4554C18.9077 5.4554 22.2167 8.5724 22.2167 13.1114C22.2167 16.2964 20.7127 18.4704 18.4437 18.4704C17.3227 18.4704 16.4607 17.9514 16.0647 17.1174C15.5177 17.9784 14.6157 18.4704 13.5627 18.4704C11.3617 18.4704 9.8297 16.6114 9.8297 13.9864C9.8297 11.3884 11.3617 9.5434 13.5217 9.5434C14.4237 9.5434 15.2717 9.9804 15.8047 10.5824V10.3084C15.8047 9.9664 16.1597 9.5434 16.6797 9.5434C17.2537 9.5434 17.6227 9.9394 17.6227 10.5274V15.7224C17.6227 16.3924 17.9647 16.7484 18.6347 16.7484C19.6597 16.7484 20.3707 15.3534 20.3707 13.1664C20.3707 9.6384 17.8417 7.2874 14.0817 7.2874C10.2407 7.2874 7.6427 10.0074 7.6427 14.0134C7.6427 18.0464 10.2267 20.5484 14.3687 20.5484C15.4217 20.5484 16.1877 20.4124 17.1167 20.1934C17.2817 20.1524 17.4457 20.1114 17.5547 20.1114C18.0197 20.1114 18.3747 20.4664 18.3747 20.9314C18.3747 21.4104 18.0467 21.7794 17.4587 21.9704C16.6527 22.2304 15.4077 22.3944 14.1227 22.3944ZM13.8907 16.5704C15.0937 16.5704 15.8867 15.5454 15.8867 13.9044C15.8867 12.3044 15.1077 11.3204 13.9047 11.3204C12.7147 11.3204 11.9487 12.3324 11.9487 13.9454C11.9487 15.5724 12.7007 16.5704 13.8907 16.5704Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.5057 22.5449C9.4887 22.5449 6.1247 19.2359 6.1247 14.2739C6.1247 9.3109 9.4887 5.9469 14.4377 5.9469C19.1957 5.9469 22.4487 8.9959 22.4487 13.4809C22.4487 16.5569 20.9047 18.6619 18.5667 18.6619C17.4177 18.6619 16.5297 18.1559 16.1597 17.3629C15.6407 18.2109 14.7927 18.6759 13.7537 18.6619C11.5937 18.6619 10.1167 16.8709 10.1167 14.2869C10.1167 11.7719 11.5797 9.9939 13.6577 9.9939C14.5877 9.9939 15.4077 10.4319 15.9007 11.0739V10.8969C15.9007 10.4449 16.3237 9.9939 16.9257 9.9939C17.5957 9.9939 18.0467 10.4589 18.0467 11.1429V15.7769C18.0467 16.3929 18.3207 16.7209 18.8807 16.7209C19.7557 16.7209 20.4257 15.5039 20.4257 13.5219C20.4257 10.1719 17.9917 7.9159 14.4237 7.9159C10.7187 7.9159 8.2307 10.4999 8.2307 14.3149C8.2307 18.1699 10.7327 20.5629 14.7517 20.5629C15.5177 20.5629 16.0647 20.4529 16.8027 20.3029C17.0217 20.2619 17.2817 20.2349 17.4457 20.2349C17.9917 20.2349 18.3887 20.6169 18.3887 21.1369C18.3887 21.6429 18.0737 21.9849 17.5137 22.1759C16.7887 22.4359 15.6677 22.5449 14.5057 22.5449ZM14.1917 16.5699C15.2167 16.5699 15.8727 15.7089 15.8727 14.2599C15.8727 12.8649 15.2167 12.0179 14.2047 12.0179C13.2207 12.0179 12.5777 12.8649 12.5777 14.2869C12.5777 15.7229 13.2067 16.5699 14.1917 16.5699Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4527 21.7242C8.6407 21.7242 5.2637 18.2652 5.2637 13.3162C5.2637 8.5042 8.7227 5.0312 13.5077 5.0312C18.2247 5.0312 21.5327 8.1622 21.5327 12.6602C21.5327 15.8182 20.3167 17.7732 18.2797 17.7732C17.0627 17.7732 16.2147 17.1032 15.8867 16.0372C15.3667 17.1442 14.4377 17.7462 13.2067 17.7462C11.1017 17.7462 9.6657 15.9962 9.6657 13.4532C9.6657 10.9102 11.1157 9.1332 13.1937 9.1332C14.2867 9.1332 15.2577 9.6792 15.7637 10.5542V9.5842C15.7637 9.3512 15.9687 9.1332 16.2287 9.1332C16.5017 9.1332 16.6937 9.3382 16.6937 9.6382V14.9022C16.6937 16.1602 17.2947 16.8982 18.3207 16.8982C19.7557 16.8982 20.6037 15.3402 20.6037 12.6742C20.6037 8.6952 17.7047 5.9332 13.5077 5.9332C9.2697 5.9332 6.2067 9.0232 6.2067 13.3302C6.2067 17.7732 9.1597 20.8082 13.5077 20.8082C14.6287 20.8082 15.5447 20.6582 16.2697 20.5492C16.4067 20.5352 16.5707 20.4672 16.7067 20.4672C16.9527 20.4672 17.1447 20.6442 17.1447 20.8902C17.1447 21.1232 16.9937 21.2732 16.7067 21.3692C16.0777 21.6012 14.9707 21.7242 13.4527 21.7242ZM13.2757 16.8302C14.7927 16.8302 15.7907 15.4762 15.7907 13.3442C15.7907 11.2932 14.8207 10.0352 13.2757 10.0352C11.7577 10.0352 10.6507 11.4572 10.6507 13.4532C10.6507 15.4632 11.7167 16.8302 13.2757 16.8302Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2617 21.5191C8.5037 21.5191 5.1407 18.0331 5.1407 13.1251C5.1407 8.3811 8.6137 4.8941 13.3297 4.8941C18.0327 4.8941 21.3277 8.0251 21.3277 12.5101C21.3277 15.6681 20.1937 17.5551 18.2387 17.5551C16.9937 17.5551 16.1327 16.8571 15.8457 15.7091C15.3127 16.8851 14.3967 17.5411 13.0977 17.5411C11.0197 17.5411 9.6117 15.8051 9.6117 13.3031C9.6117 10.7731 11.0467 9.0101 13.0977 9.0101C14.2597 9.0101 15.2577 9.5841 15.7637 10.5411V9.3651C15.7637 9.1601 15.9137 9.0101 16.0917 9.0101C16.2827 9.0101 16.4197 9.1601 16.4197 9.3651V14.6561C16.4197 16.0781 17.1037 16.9261 18.2247 16.9261C19.7697 16.9261 20.6717 15.3401 20.6717 12.5101C20.6717 8.4081 17.6637 5.5371 13.3297 5.5371C8.9827 5.5371 5.7967 8.7361 5.7967 13.1251C5.7967 17.6911 8.8597 20.8771 13.2617 20.8771C14.3967 20.8771 15.3537 20.7131 16.0237 20.6441C16.1597 20.6311 16.3107 20.5621 16.4607 20.5621C16.6387 20.5621 16.7757 20.6851 16.7757 20.8631C16.7757 21.0411 16.6937 21.1231 16.4887 21.1911C15.9007 21.4101 14.8477 21.5191 13.2617 21.5191ZM13.0977 16.8981C14.7107 16.8981 15.7497 15.4351 15.7497 13.1801C15.7497 10.9781 14.7387 9.6521 13.0977 9.6521C11.4847 9.6521 10.2677 11.1971 10.2677 13.3031C10.2677 15.4221 11.4297 16.8981 13.0977 16.8981Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
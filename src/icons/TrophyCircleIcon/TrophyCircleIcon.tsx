import { IconProps } from "../../types"

export default function TrophyCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM7.7517 10.5411C7.7517 12.7691 9.7207 14.4651 12.1267 15.2301C12.5507 15.7911 13.0427 16.2831 13.5487 16.5981V18.5121H12.6327C11.7307 18.5121 11.1287 19.0991 11.1287 20.0161V21.1371C11.1287 21.6421 11.5387 22.0531 12.0587 22.0531H17.8147C18.3207 22.0531 18.7307 21.6421 18.7307 21.1371V20.0161C18.7307 19.0991 18.1427 18.5121 17.2407 18.5121H16.3237V16.5981C16.8297 16.2831 17.3227 15.7911 17.7327 15.2301C20.1527 14.4651 22.1207 12.7691 22.1207 10.5411C22.1207 9.6801 21.5197 9.1051 20.6037 9.1051H18.9077C18.6487 8.4761 18.0737 8.1071 17.2677 8.1071H12.6057C11.7987 8.1071 11.2247 8.4761 10.9647 9.1051H9.2697C8.3537 9.1051 7.7517 9.6801 7.7517 10.5411ZM10.8277 10.8011V11.5941C10.8277 11.9901 10.8967 12.4141 11.0057 12.8381C10.2407 12.6461 9.3787 11.6351 9.3787 10.9371C9.3787 10.8551 9.4337 10.8011 9.5017 10.8011ZM19.0317 10.8011H20.3707C20.4397 10.8011 20.4807 10.8551 20.4807 10.9371C20.4807 11.6351 19.6327 12.6461 18.8667 12.8381C18.9767 12.4141 19.0317 11.9901 19.0317 11.5941Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM7.1367 9.7066C7.1507 12.2226 9.1877 13.9866 11.6897 14.7926C12.0997 15.3266 12.5647 15.7776 13.0567 16.0786V18.4156H12.1267C11.1837 18.4156 10.5817 19.0036 10.5817 19.9476V21.0816C10.5817 21.5196 10.9237 21.8616 11.3747 21.8616H17.5137C17.9507 21.8616 18.2927 21.5196 18.2927 21.0816V19.9476C18.2927 19.0036 17.7047 18.4156 16.7477 18.4156H15.8317V16.0786C16.3107 15.7776 16.7887 15.3266 17.1987 14.7926C19.6877 13.9866 21.7387 12.2226 21.7387 9.7066C21.7387 8.8866 21.1777 8.3536 20.3167 8.3536H18.5667C18.3617 7.6836 17.8147 7.3006 16.9807 7.3006H11.8947C11.0737 7.3006 10.5137 7.6836 10.3087 8.3536H8.5587C7.6977 8.3536 7.1367 8.8866 7.1367 9.7066ZM10.2127 9.8436V10.8416C10.2127 11.4706 10.3357 12.1136 10.5547 12.7016C9.5977 12.2636 8.5857 11.1426 8.5857 9.9806C8.5857 9.8986 8.6407 9.8436 8.7087 9.8436ZM18.6617 9.8436H20.1797C20.2477 9.8436 20.3027 9.8986 20.3027 9.9806C20.2887 11.1426 19.2907 12.2636 18.3207 12.7016C18.5387 12.1136 18.6617 11.4706 18.6617 10.8416Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM7.4647 10.1584C7.4647 12.5094 9.4747 14.2464 11.9217 15.0254C12.3317 15.5724 12.8107 16.0504 13.3167 16.3654V18.4704H12.4007C11.4707 18.4704 10.8687 19.0584 10.8687 19.9884V21.1234C10.8687 21.5884 11.2517 21.9704 11.7307 21.9704H17.6637C18.1567 21.9704 18.5257 21.5884 18.5257 21.1234V19.9884C18.5257 19.0584 17.9377 18.4704 17.0077 18.4704H16.0917V16.3654C16.5837 16.0504 17.0757 15.5724 17.4867 15.0254C19.9337 14.2464 21.9437 12.5094 21.9437 10.1584C21.9437 9.3104 21.3557 8.7634 20.4667 8.7634H18.7437C18.5117 8.1074 17.9507 7.7384 17.1307 7.7384H12.2777C11.4567 7.7384 10.8827 8.1074 10.6637 8.7634H8.9277C8.0387 8.7634 7.4647 9.3104 7.4647 10.1584ZM10.5407 10.3494V11.2384C10.5407 11.7574 10.6367 12.2774 10.7867 12.7834C9.9397 12.4684 9.0097 11.4024 9.0097 10.4864C9.0097 10.4044 9.0507 10.3494 9.1187 10.3494ZM18.8537 10.3494H20.2757C20.3437 10.3494 20.3987 10.4044 20.3987 10.4864C20.3987 11.4024 19.4687 12.4684 18.6077 12.7834C18.7717 12.2774 18.8537 11.7574 18.8537 11.2384Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM6.4667 8.463C6.4807 11.197 8.2987 12.934 10.7737 13.918C11.2517 14.588 11.8397 15.135 12.4547 15.49V18.293H11.3337C10.4047 18.293 9.8577 18.826 9.8577 19.742V20.986C9.8577 21.301 10.0897 21.533 10.4047 21.533H17.0217C17.3357 21.533 17.5687 21.301 17.5687 20.986V19.742C17.5687 18.826 17.0217 18.293 16.1057 18.293H14.9847V15.49C15.5857 15.135 16.1737 14.588 16.6527 13.918C19.1267 12.934 20.9457 11.197 20.9727 8.463C20.9727 7.752 20.4807 7.273 19.7147 7.273H18.0737C17.9647 6.576 17.4457 6.166 16.6527 6.166H10.7737C9.9937 6.166 9.4607 6.576 9.3517 7.273H7.7107C6.9587 7.273 6.4667 7.752 6.4667 8.463ZM9.3107 8.367V9.803C9.3107 10.678 9.4887 11.539 9.8167 12.346C8.5857 11.566 7.5327 10.281 7.5197 8.559C7.5197 8.449 7.6017 8.367 7.7107 8.367ZM18.1157 8.367H19.7147C19.8237 8.367 19.9067 8.449 19.9067 8.559C19.8927 10.281 18.8397 11.566 17.6097 12.346C17.9377 11.539 18.1157 10.678 18.1157 9.803Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM6.7537 9.1601C6.7677 11.8531 8.8457 13.6581 11.4027 14.5061C11.7987 15.0251 12.2637 15.4491 12.7417 15.7361V18.3341H11.8127C10.8277 18.3341 10.2267 18.9351 10.2267 19.9061V21.0411C10.2267 21.4241 10.5277 21.7241 10.9377 21.7241H17.3227C17.7187 21.7241 18.0197 21.4241 18.0197 21.0411V19.9061C18.0197 18.9351 17.4317 18.3341 16.4477 18.3341H15.5037V15.7361C15.9827 15.4491 16.4477 15.0251 16.8577 14.5061C19.4007 13.6581 21.4917 11.8531 21.4917 9.1601C21.4917 8.3811 20.9727 7.8751 20.1387 7.8751H18.3477C18.1837 7.1641 17.6367 6.7671 16.8027 6.7671H11.4437C10.6097 6.7671 10.0627 7.1641 9.8987 7.8751H8.1077C7.2737 7.8751 6.7537 8.3811 6.7537 9.1601ZM9.8297 9.2281V10.3631C9.8297 11.1291 9.9807 11.9081 10.2677 12.6191C9.1877 12.0041 8.0797 10.8141 8.0667 9.3511C8.0667 9.2831 8.1207 9.2281 8.1897 9.2281ZM18.4297 9.2281H20.0567C20.1247 9.2281 20.1797 9.2831 20.1797 9.3511C20.1797 10.8141 19.0727 12.0041 17.9787 12.6191C18.2657 11.9081 18.4297 11.1291 18.4297 10.3631Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM6.5347 8.8454C6.5487 11.6484 8.6547 13.4804 11.2387 14.3414C11.6347 14.8474 12.0997 15.2714 12.5647 15.5454V18.2934H11.6207C10.6227 18.2934 10.0347 18.8804 10.0347 19.8784V21.0134C10.0347 21.3694 10.3087 21.6424 10.6777 21.6424H17.2127C17.5817 21.6424 17.8557 21.3694 17.8557 21.0134V19.8784C17.8557 18.8804 17.2677 18.2934 16.2697 18.2934H15.3257V15.5454C15.7907 15.2714 16.2557 14.8474 16.6527 14.3414C19.2367 13.4804 21.3557 11.6484 21.3557 8.8454C21.3557 8.0804 20.8497 7.5874 20.0427 7.5874H18.2387C18.0877 6.8774 17.5407 6.4804 16.6937 6.4804H11.1977C10.3497 6.4804 9.8027 6.8774 9.6527 7.5874H7.8477C7.0407 7.5874 6.5347 8.0804 6.5347 8.8454ZM9.5977 8.8734V10.0894C9.5977 10.9374 9.7757 11.7854 10.1167 12.5644C8.9547 11.8534 7.7927 10.6234 7.7797 9.0094C7.7797 8.9414 7.8337 8.8734 7.9027 8.8734ZM18.2927 8.8734H19.9887C20.0567 8.8734 20.1117 8.9414 20.1117 9.0094C20.0977 10.6234 18.9487 11.8534 17.7867 12.5644C18.1157 11.7854 18.2927 10.9374 18.2927 10.0894Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM6.9177 9.3929C6.9317 12.0179 8.9957 13.7949 11.5257 14.6289C11.9217 15.1489 12.4007 15.5999 12.8787 15.8869V18.3749H11.9487C10.9787 18.3749 10.3907 18.9629 10.3907 19.9199V21.0549C10.3907 21.4649 10.7047 21.7789 11.1157 21.7789H17.4047C17.8147 21.7789 18.1427 21.4649 18.1427 21.0549V19.9199C18.1427 18.9629 17.5407 18.3749 16.5707 18.3749H15.6407V15.8869C16.1327 15.5999 16.5977 15.1489 17.0077 14.6289C19.5237 13.7949 21.6017 12.0179 21.6017 9.3929C21.6017 8.5999 21.0547 8.0799 20.2207 8.0799H18.4437C18.2657 7.3829 17.7047 6.9999 16.8707 6.9999H11.6487C10.8147 6.9999 10.2537 7.3829 10.0757 8.0799H8.2987C7.4647 8.0799 6.9177 8.5999 6.9177 9.3929ZM9.9937 9.5019V10.5679C9.9937 11.2789 10.1307 11.9899 10.3907 12.6599C9.3657 12.1129 8.2987 10.9509 8.2847 9.6249C8.2847 9.5569 8.3397 9.5019 8.4077 9.5019ZM18.5257 9.5019H20.1117C20.1797 9.5019 20.2347 9.5569 20.2347 9.6249C20.2207 10.9509 19.1547 12.1129 18.1287 12.6599C18.3887 11.9899 18.5257 11.2789 18.5257 10.5679Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM6.3577 7.9702C6.3987 10.5952 7.8207 12.2222 10.1717 13.3852C10.7457 14.2462 11.4977 14.9702 12.3047 15.4352V18.2792H10.9377C10.1167 18.2792 9.6387 18.7582 9.6387 19.5782V20.9722C9.6387 21.2192 9.8027 21.3832 10.0487 21.3832H16.7617C17.0077 21.3832 17.1857 21.2192 17.1857 20.9722V19.5782C17.1857 18.7582 16.6937 18.2792 15.8867 18.2792H14.5057V15.4352C15.3127 14.9702 16.0647 14.2462 16.6387 13.3852C19.0037 12.2222 20.4257 10.5952 20.4527 7.9702C20.4527 7.3142 19.9887 6.8632 19.2777 6.8632H17.8827C17.8007 6.1792 17.3087 5.7422 16.5837 5.7422H10.2267C9.5157 5.7422 9.0097 6.1792 8.9417 6.8632H7.5327C6.8357 6.8632 6.3577 7.3142 6.3577 7.9702ZM8.9277 7.6832V9.4472C8.9277 10.3362 9.1057 11.2242 9.4337 12.0452C8.0937 11.1972 7.2047 9.8302 7.1777 7.9702C7.1777 7.8062 7.2867 7.6832 7.4507 7.6832ZM17.8967 7.6832H19.3597C19.5237 7.6832 19.6327 7.8062 19.6327 7.9702C19.6057 9.8302 18.7167 11.1972 17.3907 12.0452C17.7187 11.2242 17.8967 10.3362 17.8967 9.4472Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM6.3167 7.7111C6.3437 10.2811 7.5737 11.8531 9.8707 13.0981C10.4867 14.0681 11.3337 14.8751 12.2227 15.4081V18.2651H10.7327C9.9667 18.2651 9.5157 18.7171 9.5157 19.4821V20.9591C9.5157 21.1641 9.6527 21.3011 9.8577 21.3011H16.6387C16.8437 21.3011 16.9807 21.1641 16.9807 20.9591V19.4821C16.9807 18.7171 16.5297 18.2651 15.7637 18.2651H14.2737V15.4081C15.1757 14.8751 16.0097 14.0681 16.6247 13.0981C18.9357 11.8531 20.1527 10.2811 20.1937 7.7111C20.1937 7.0821 19.7287 6.6441 19.0587 6.6441H17.7737C17.7187 5.9611 17.2407 5.5231 16.5567 5.5231H9.9397C9.2697 5.5231 8.7777 5.9611 8.7227 6.6441H7.4507C6.7677 6.6441 6.3167 7.0821 6.3167 7.7111ZM8.7227 7.3281V9.2421C8.7227 10.1581 8.9007 11.0471 9.2287 11.8811C7.8477 10.9921 7.0407 9.5981 6.9997 7.6701C6.9997 7.4781 7.1227 7.3281 7.3147 7.3281ZM17.7737 7.3281H19.1817C19.3727 7.3281 19.4957 7.4781 19.4957 7.6701C19.4687 9.5981 18.6487 10.9921 17.2677 11.8811C17.5957 11.0471 17.7737 10.1581 17.7737 9.2421Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
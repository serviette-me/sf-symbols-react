import { IconProps } from "../../types"

export default function GearshapeCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM14.3967 21.6421H15.4767C15.9957 21.6421 16.4337 21.3011 16.5427 20.7951L16.8027 19.7281C16.8847 19.6871 16.9667 19.6601 17.0487 19.6331L17.9787 20.2071C18.4157 20.4801 18.9767 20.4121 19.3457 20.0571L20.0837 19.3051C20.4527 18.9221 20.5077 18.3481 20.2207 17.9241L19.6597 16.9941C19.6877 16.9261 19.7147 16.8571 19.7557 16.7751L20.8357 16.5291C21.3417 16.4061 21.6837 15.9821 21.6837 15.4351V14.3961C21.6837 13.8771 21.3417 13.4531 20.8357 13.3161L19.7697 13.0701C19.7287 12.9881 19.7007 12.9061 19.6597 12.8381L20.2347 11.8941C20.5217 11.4301 20.4807 10.8831 20.0837 10.5141L19.3317 9.7621C18.9627 9.4331 18.4707 9.3651 18.0057 9.5981L17.0487 10.1991C16.9667 10.1581 16.8847 10.1311 16.8167 10.0901L16.5427 9.0101C16.4337 8.4901 15.9957 8.1481 15.4767 8.1481H14.3967C13.8637 8.1481 13.4257 8.4901 13.3297 9.0231L13.0707 10.0901C12.9747 10.1171 12.8927 10.1581 12.8107 10.1851L11.8537 9.5981C11.4027 9.3651 10.9097 9.4201 10.5277 9.7621L9.7757 10.5141C9.3927 10.8831 9.3377 11.4301 9.6247 11.8941L10.1987 12.8381C10.1577 12.9061 10.1307 12.9881 10.0897 13.0701L9.0367 13.3161C8.5317 13.4531 8.1897 13.8771 8.1897 14.3961V15.4351C8.1897 15.9821 8.5317 16.4061 9.0367 16.5291L10.1037 16.7751C10.1447 16.8571 10.1717 16.9261 10.1987 16.9941L9.6527 17.9241C9.3517 18.3481 9.4067 18.9221 9.7887 19.3051L10.5137 20.0571C10.8967 20.4121 11.4567 20.4801 11.8947 20.2071L12.8107 19.6331C12.9067 19.6601 12.9747 19.6871 13.0707 19.7281L13.3297 20.7951C13.4257 21.3011 13.8637 21.6421 14.3967 21.6421ZM14.9297 16.8981C13.8357 16.8981 12.9337 15.9961 12.9337 14.9021C12.9337 13.8221 13.8357 12.9201 14.9297 12.9201C16.0367 12.9201 16.9257 13.8221 16.9257 14.9021C16.9257 15.9961 16.0367 16.8981 14.9297 16.8981Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM13.8087 21.8066H15.0527C15.5177 21.8066 15.8867 21.5196 15.9827 21.0686L16.3107 19.6876C16.5017 19.6196 16.6797 19.5506 16.8437 19.4686L18.0467 20.2066C18.4297 20.4536 18.9077 20.3986 19.2227 20.0836L20.0837 19.2226C20.4117 18.8946 20.4667 18.4026 20.2067 18.0336L19.4827 16.8296C19.5507 16.6656 19.6187 16.4886 19.6877 16.3106L21.0687 15.9956C21.5197 15.8866 21.8067 15.5316 21.8067 15.0526V13.8356C21.8067 13.3846 21.5197 13.0296 21.0687 12.9196L19.7007 12.5916C19.6327 12.4006 19.5507 12.2086 19.4827 12.0586L20.2207 10.8556C20.4667 10.4586 20.4397 9.9946 20.0977 9.6656L19.2227 8.8046C18.8947 8.5036 18.4847 8.4356 18.0737 8.6546L16.8437 9.4196C16.6797 9.3376 16.5017 9.2696 16.3237 9.1876L15.9827 7.7926C15.8867 7.3416 15.5177 7.0546 15.0527 7.0546H13.8087C13.3437 7.0546 12.9747 7.3416 12.8927 7.8066L12.5507 9.1876C12.3597 9.2426 12.1677 9.3246 12.0037 9.4066L10.7867 8.6546C10.3907 8.4356 9.9667 8.4906 9.6387 8.8046L8.7637 9.6656C8.4357 9.9946 8.3947 10.4586 8.6407 10.8556L9.3787 12.0586C9.3107 12.2086 9.2287 12.4006 9.1597 12.5916L7.7927 12.9196C7.3417 13.0296 7.0547 13.3846 7.0547 13.8356V15.0526C7.0547 15.5316 7.3417 15.8866 7.7927 15.9956L9.1737 16.3106C9.2417 16.4886 9.3107 16.6656 9.3927 16.8296L8.6677 18.0336C8.4077 18.4026 8.4487 18.8946 8.7777 19.2226L9.6387 20.0836C9.9667 20.3986 10.4317 20.4536 10.8147 20.2066L12.0177 19.4686C12.1817 19.5506 12.3597 19.6196 12.5507 19.6876L12.8927 21.0686C12.9747 21.5196 13.3437 21.8066 13.8087 21.8066ZM14.4377 16.7756C13.1387 16.7756 12.0857 15.7226 12.0857 14.4236C12.0857 13.1526 13.1387 12.0856 14.4377 12.0856C15.7227 12.0856 16.7887 13.1526 16.7887 14.4236C16.7887 15.7226 15.7227 16.7756 14.4377 16.7756Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM14.1227 21.7244H15.2717C15.7777 21.7244 16.1737 21.4104 16.2697 20.9314L16.5707 19.7144C16.7067 19.6604 16.8297 19.6054 16.9527 19.5644L18.0057 20.2074C18.4297 20.4664 18.9487 20.4124 19.2907 20.0704L20.0837 19.2634C20.4397 18.9224 20.4937 18.3884 20.2067 17.9784L19.5777 16.9254C19.6327 16.8164 19.6737 16.6934 19.7287 16.5704L20.9457 16.2834C21.4237 16.1604 21.7387 15.7774 21.7387 15.2574V14.1364C21.7387 13.6444 21.4237 13.2614 20.9457 13.1384L19.7417 12.8514C19.6877 12.7144 19.6327 12.5784 19.5777 12.4824L20.2347 11.4024C20.4937 10.9784 20.4527 10.4594 20.0977 10.1174L19.2777 9.3244C18.9357 8.9964 18.4707 8.9274 18.0467 9.1604L16.9527 9.8434C16.8297 9.7754 16.7067 9.7344 16.5837 9.6794L16.2697 8.4354C16.1737 7.9574 15.7777 7.6424 15.2717 7.6424H14.1227C13.6167 7.6424 13.2207 7.9574 13.1247 8.4494L12.8237 9.6664C12.6877 9.7074 12.5507 9.7754 12.4277 9.8304L11.3477 9.1604C10.9237 8.9274 10.4587 8.9964 10.1167 9.3244L9.2967 10.1174C8.9417 10.4594 8.9007 10.9784 9.1597 11.4024L9.8167 12.4824C9.7617 12.5784 9.7067 12.7144 9.6527 12.8514L8.4487 13.1384C7.9707 13.2614 7.6567 13.6444 7.6567 14.1364V15.2574C7.6567 15.7774 7.9707 16.1604 8.4487 16.2834L9.6657 16.5704C9.7207 16.6934 9.7617 16.8164 9.8167 16.9254L9.1877 17.9784C8.9007 18.3884 8.9547 18.9224 9.3107 19.2634L10.1037 20.0704C10.4457 20.4124 10.9647 20.4664 11.3887 20.2074L12.4417 19.5644C12.5647 19.6054 12.6877 19.6604 12.8237 19.7144L13.1247 20.9314C13.2207 21.4104 13.6167 21.7244 14.1227 21.7244ZM14.6977 16.8434C13.5077 16.8434 12.5367 15.8734 12.5367 14.6834C12.5367 13.5074 13.5077 12.5374 14.6977 12.5374C15.8867 12.5374 16.8577 13.5074 16.8577 14.6834C16.8577 15.8734 15.8867 16.8434 14.6977 16.8434Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM12.9607 21.725H14.4507C14.8617 21.725 15.1487 21.479 15.2437 21.055L15.6407 19.4C15.9007 19.305 16.1597 19.209 16.3927 19.1L17.8557 20.002C18.1977 20.234 18.5797 20.193 18.8667 19.906L19.8927 18.881C20.1937 18.58 20.2477 18.184 20.0017 17.828L19.1137 16.393C19.2227 16.146 19.3187 15.887 19.4007 15.641L21.0687 15.258C21.4917 15.148 21.7247 14.875 21.7247 14.438V12.988C21.7247 12.578 21.4917 12.291 21.0687 12.195L19.4137 11.799C19.3187 11.512 19.2087 11.266 19.1267 11.033L20.0157 9.584C20.2477 9.229 20.2067 8.846 19.9197 8.545L18.8667 7.52C18.5797 7.246 18.2247 7.191 17.8687 7.41L16.3927 8.313C16.1597 8.217 15.9137 8.107 15.6407 8.012L15.2437 6.344C15.1487 5.92 14.8617 5.688 14.4507 5.688H12.9607C12.5507 5.688 12.2637 5.92 12.1677 6.344L11.7717 8.012C11.5117 8.107 11.2387 8.203 10.9917 8.313L9.5427 7.41C9.1877 7.191 8.8317 7.232 8.5317 7.52L7.4917 8.545C7.1917 8.846 7.1637 9.229 7.3967 9.584L8.2847 11.033C8.1897 11.266 8.0937 11.512 7.9977 11.799L6.3437 12.195C5.9197 12.291 5.6877 12.578 5.6877 12.988V14.438C5.6877 14.875 5.9197 15.148 6.3437 15.258L7.9977 15.641C8.0937 15.887 8.1897 16.146 8.2987 16.393L7.4097 17.828C7.1637 18.184 7.2047 18.58 7.5057 18.881L8.5317 19.906C8.8317 20.193 9.2147 20.234 9.5567 20.002L11.0057 19.1C11.2387 19.209 11.5117 19.305 11.7717 19.4L12.1677 21.055C12.2637 21.479 12.5507 21.725 12.9607 21.725ZM13.7127 16.461C12.1957 16.461 10.9377 15.217 10.9377 13.686C10.9377 12.182 12.1957 10.938 13.7127 10.938C15.2307 10.938 16.4747 12.182 16.4747 13.686C16.4747 15.217 15.2307 16.461 13.7127 16.461Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM13.4397 21.9021H14.7927C15.2167 21.9021 15.5317 21.6421 15.6137 21.2321L15.9957 19.6461C16.2557 19.5641 16.5017 19.4691 16.7207 19.3591L18.1017 20.2071C18.4437 20.4391 18.8667 20.3851 19.1547 20.0981L20.0837 19.1681C20.3847 18.8671 20.4397 18.4431 20.1937 18.0881L19.3597 16.7211C19.4687 16.4881 19.5647 16.2561 19.6467 16.0101L21.2327 15.6401C21.6427 15.5451 21.8887 15.2301 21.8887 14.8061V13.4801C21.8887 13.0701 21.6427 12.7421 21.2327 12.6601L19.6597 12.2771C19.5647 12.0041 19.4547 11.7581 19.3727 11.5531L20.2207 10.1721C20.4397 9.8161 20.4117 9.4201 20.1117 9.1051L19.1547 8.1761C18.8537 7.9021 18.4847 7.8481 18.1157 8.0391L16.7207 8.9001C16.5017 8.8051 16.2697 8.6951 15.9957 8.6131L15.6137 7.0141C15.5317 6.6031 15.2167 6.3441 14.7927 6.3441H13.4397C13.0157 6.3441 12.7007 6.6031 12.6057 7.0271L12.2227 8.5991C11.9767 8.6811 11.7167 8.7771 11.4847 8.9001L10.1037 8.0391C9.7347 7.8481 9.3657 7.8891 9.0777 8.1761L8.1077 9.1051C7.8207 9.4201 7.7927 9.8161 8.0117 10.1721L8.8597 11.5531C8.7637 11.7581 8.6547 12.0041 8.5727 12.2771L6.9997 12.6601C6.5757 12.7421 6.3297 13.0701 6.3297 13.4801V14.8061C6.3297 15.2301 6.5757 15.5451 6.9997 15.6401L8.5857 16.0101C8.6547 16.2561 8.7497 16.4881 8.8597 16.7211L8.0387 18.0881C7.7927 18.4431 7.8477 18.8671 8.1347 19.1681L9.0647 20.0981C9.3657 20.3851 9.7757 20.4391 10.1167 20.2071L11.4977 19.3591C11.7167 19.4691 11.9767 19.5641 12.2227 19.6461L12.6057 21.2321C12.7007 21.6421 13.0157 21.9021 13.4397 21.9021ZM14.1097 16.6931C12.7007 16.6931 11.5387 15.5311 11.5387 14.1091C11.5387 12.7151 12.7007 11.5531 14.1097 11.5531C15.5317 11.5531 16.6937 12.7151 16.6937 14.1091C16.6937 15.5311 15.5317 16.6931 14.1097 16.6931Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM13.2207 21.9574H14.6427C15.0387 21.9574 15.3257 21.7114 15.4077 21.3144L15.8187 19.6324C16.1057 19.5374 16.4067 19.4144 16.6527 19.2914L18.1287 20.1934C18.4567 20.4254 18.8397 20.3844 19.1137 20.1114L20.0837 19.1274C20.3707 18.8534 20.4117 18.4574 20.1797 18.1154L19.2907 16.6524C19.4137 16.3924 19.5237 16.1194 19.6187 15.8324L21.3147 15.4494C21.7107 15.3534 21.9437 15.0664 21.9437 14.6564V13.2754C21.9437 12.8784 21.7107 12.5914 21.3147 12.5094L19.6327 12.0994C19.5237 11.7854 19.4007 11.5114 19.3047 11.2654L20.2067 9.7894C20.4117 9.4614 20.3987 9.0914 20.1117 8.7914L19.1137 7.8204C18.8397 7.5604 18.4977 7.5054 18.1427 7.6974L16.6527 8.6134C16.4067 8.5034 16.1187 8.3804 15.8187 8.2854L15.4077 6.5764C15.3257 6.1794 15.0387 5.9474 14.6427 5.9474H13.2207C12.8237 5.9474 12.5367 6.1794 12.4547 6.5764L12.0447 8.2714C11.7577 8.3674 11.4567 8.4764 11.1977 8.6134L9.7207 7.6974C9.3787 7.5054 9.0367 7.5464 8.7497 7.8204L7.7517 8.7914C7.4647 9.0914 7.4507 9.4614 7.6567 9.7894L8.5587 11.2654C8.4627 11.5114 8.3397 11.7854 8.2307 12.0994L6.5487 12.5094C6.1527 12.5914 5.9337 12.8784 5.9337 13.2754V14.6564C5.9337 15.0664 6.1527 15.3534 6.5487 15.4494L8.2437 15.8324C8.3397 16.1194 8.4487 16.3924 8.5727 16.6524L7.6837 18.1154C7.4507 18.4574 7.4917 18.8534 7.7797 19.1274L8.7497 20.1114C9.0367 20.3844 9.4197 20.4254 9.7347 20.1934L11.2107 19.2914C11.4567 19.4144 11.7577 19.5374 12.0447 19.6324L12.4547 21.3144C12.5367 21.7114 12.8237 21.9574 13.2207 21.9574ZM13.9317 16.6524C12.4417 16.6524 11.2247 15.4214 11.2247 13.9314C11.2247 12.4554 12.4417 11.2524 13.9317 11.2524C15.4217 11.2524 16.6387 12.4554 16.6387 13.9314C16.6387 15.4214 15.4217 16.6524 13.9317 16.6524Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM13.6037 21.8609H14.9027C15.3397 21.8609 15.6817 21.5879 15.7777 21.1639L16.1327 19.6739C16.3657 19.5919 16.5837 19.4959 16.7757 19.4139L18.0877 20.2069C18.4437 20.4399 18.8807 20.3989 19.1817 20.0979L20.0837 19.1949C20.3987 18.8809 20.4527 18.4299 20.1937 18.0609L19.4137 16.7759C19.5097 16.5699 19.5917 16.3519 19.6597 16.1469L21.1637 15.7909C21.5877 15.6949 21.8617 15.3669 21.8617 14.9159V13.6309C21.8617 13.2069 21.5877 12.8649 21.1637 12.7699L19.6737 12.4139C19.5917 12.1679 19.4957 11.9629 19.4277 11.7719L20.2207 10.4729C20.4527 10.0899 20.4257 9.6659 20.1117 9.3519L19.1817 8.4489C18.8807 8.1619 18.4847 8.1079 18.1017 8.3129L16.7757 9.1329C16.5837 9.0369 16.3657 8.9419 16.1327 8.8599L15.7777 7.3559C15.6817 6.9319 15.3397 6.6579 14.9027 6.6579H13.6037C13.1527 6.6579 12.8237 6.9319 12.7287 7.3559L12.3727 8.8599C12.1407 8.9279 11.9217 9.0239 11.7167 9.1189L10.4047 8.3129C10.0217 8.1079 9.6247 8.1489 9.3237 8.4489L8.3947 9.3519C8.0797 9.6659 8.0527 10.0899 8.2847 10.4729L9.0777 11.7719C8.9957 11.9629 8.9007 12.1679 8.8187 12.4139L7.3417 12.7699C6.9047 12.8649 6.6447 13.2069 6.6447 13.6309V14.9159C6.6447 15.3669 6.9047 15.6949 7.3417 15.7909L8.8317 16.1469C8.9137 16.3519 8.9957 16.5699 9.0917 16.7759L8.3127 18.0609C8.0527 18.4299 8.1077 18.8809 8.4077 19.1949L9.3107 20.0979C9.6247 20.3989 10.0627 20.4399 10.4177 20.2069L11.7167 19.4139C11.9217 19.4959 12.1407 19.5919 12.3727 19.6739L12.7287 21.1639C12.8237 21.5879 13.1527 21.8609 13.6037 21.8609ZM14.2597 16.7349C12.8927 16.7349 11.7717 15.6129 11.7717 14.2459C11.7717 12.8929 12.8927 11.7849 14.2597 11.7849C15.6137 11.7849 16.7347 12.8929 16.7347 14.2459C16.7347 15.6129 15.6137 16.7349 14.2597 16.7349Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM12.6187 21.4242H14.1917C14.6287 21.4242 14.9157 21.1912 15.0257 20.7262L15.3947 19.0992C15.6267 19.0042 15.8597 18.9352 16.0507 18.8532L17.4867 19.7422C17.8687 20.0022 18.2517 19.9472 18.5527 19.6462L19.6467 18.5532C19.9607 18.2382 20.0157 17.8422 19.7697 17.4592L18.8667 16.0512C18.9487 15.8322 19.0317 15.5992 19.1137 15.3812L20.7407 15.0122C21.2187 14.8882 21.4377 14.6152 21.4377 14.1642V12.6052C21.4377 12.1682 21.2187 11.8812 20.7407 11.7712L19.1267 11.4022C19.0317 11.1702 18.9487 10.9372 18.8807 10.7322L19.7697 9.3102C20.0157 8.9282 19.9747 8.5452 19.6467 8.2172L18.5527 7.1372C18.2517 6.8362 17.8827 6.7812 17.4867 7.0272L16.0507 7.9162C15.8597 7.8472 15.6267 7.7652 15.3947 7.6702L15.0257 6.0432C14.9157 5.5782 14.6287 5.3452 14.1917 5.3452H12.6187C12.1817 5.3452 11.8947 5.5782 11.7847 6.0432L11.4157 7.6702C11.1837 7.7652 10.9507 7.8342 10.7327 7.9162L9.3237 7.0272C8.9277 6.7812 8.5587 6.8222 8.2307 7.1372L7.1367 8.2172C6.8227 8.5452 6.7947 8.9282 7.0407 9.3102L7.9297 10.7322C7.8477 10.9372 7.7657 11.1702 7.6697 11.4022L6.0707 11.7712C5.5917 11.8812 5.3727 12.1682 5.3727 12.6052V14.1642C5.3727 14.6152 5.5917 14.8882 6.0707 15.0122L7.6697 15.3812C7.7657 15.5992 7.8337 15.8322 7.9437 16.0512L7.0407 17.4592C6.7947 17.8422 6.8227 18.2382 7.1507 18.5532L8.2307 19.6462C8.5587 19.9472 8.9417 20.0022 9.3237 19.7422L10.7327 18.8532C10.9507 18.9352 11.1837 19.0042 11.4157 19.0992L11.7847 20.7262C11.8947 21.1912 12.1817 21.4242 12.6187 21.4242ZM13.4257 16.2282C11.8537 16.2282 10.5687 14.9292 10.5687 13.3712C10.5687 11.8262 11.8537 10.5412 13.4257 10.5412C14.9707 10.5412 16.2557 11.8262 16.2557 13.3712C16.2557 14.9292 14.9707 16.2282 13.4257 16.2282Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM12.4417 21.2601H14.0547C14.5057 21.2601 14.7927 21.0271 14.9157 20.5351L15.2717 18.9351C15.4907 18.8531 15.6957 18.7851 15.8867 18.7171L17.2947 19.6051C17.7047 19.8651 18.0877 19.8101 18.4027 19.4961L19.5237 18.3751C19.8517 18.0471 19.9067 17.6641 19.6467 17.2541L18.7437 15.8591C18.8127 15.6541 18.8947 15.4491 18.9767 15.2441L20.5757 14.8751C21.0687 14.7521 21.3007 14.4651 21.3007 14.0141V12.4001C21.3007 11.9491 21.0687 11.6761 20.5757 11.5531L18.9767 11.1831C18.8947 10.9781 18.8257 10.7731 18.7437 10.5551L19.6467 9.1601C19.9067 8.7641 19.8517 8.3811 19.5237 8.0391L18.4027 6.9311C18.0877 6.6031 17.7047 6.5621 17.2947 6.8221L15.8867 7.7111C15.6957 7.6421 15.4907 7.5741 15.2717 7.4921L14.9157 5.8791C14.7927 5.3871 14.5057 5.1681 14.0547 5.1681H12.4417C11.9907 5.1681 11.7167 5.3871 11.5937 5.8791L11.2247 7.4921C11.0197 7.5741 10.8147 7.6421 10.5957 7.7111L9.2007 6.8221C8.8047 6.5621 8.4217 6.6171 8.0797 6.9311L6.9727 8.0391C6.6307 8.3811 6.6037 8.7641 6.8637 9.1601L7.7517 10.5551C7.6697 10.7731 7.6017 10.9781 7.5057 11.1831L5.9197 11.5531C5.4277 11.6761 5.2087 11.9491 5.2087 12.4001V14.0141C5.2087 14.4651 5.4277 14.7521 5.9197 14.8751L7.5057 15.2441C7.6017 15.4491 7.6697 15.6541 7.7517 15.8591L6.8637 17.2541C6.6037 17.6641 6.6307 18.0471 6.9727 18.3751L8.0797 19.4961C8.4217 19.8101 8.8047 19.8651 9.2007 19.6051L10.5957 18.7171C10.8147 18.7851 11.0197 18.8531 11.2247 18.9351L11.5937 20.5351C11.7167 21.0271 11.9907 21.2601 12.4417 21.2601ZM13.2617 16.0921C11.6757 16.0921 10.3637 14.7791 10.3637 13.1931C10.3637 11.6351 11.6757 10.3221 13.2617 10.3221C14.8337 10.3221 16.1467 11.6351 16.1467 13.1931C16.1467 14.7791 14.8337 16.0921 13.2617 16.0921Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

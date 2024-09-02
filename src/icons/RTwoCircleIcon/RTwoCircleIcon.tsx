import { IconProps } from "../../types"

export default function RTwoCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM16.8437 20.0021H20.9867C21.7107 20.0021 21.9707 19.5101 21.9707 18.9901C21.9707 18.4711 21.7107 17.9781 20.9867 17.9781H18.6897V17.8691L20.0707 16.2281C21.0687 15.0391 21.8207 14.0681 21.8207 12.6051C21.8207 10.6501 20.4667 9.5701 18.6207 9.5701C16.9937 9.5701 15.6267 10.7461 15.6267 12.1821C15.6267 12.8381 16.0097 13.3301 16.6937 13.3301C17.2127 13.3301 17.6507 13.0701 17.8277 12.4281C17.9647 11.9631 18.1567 11.5531 18.6207 11.5531C19.1817 11.5531 19.3457 12.0861 19.3457 12.6741C19.3457 13.6031 18.7307 14.4921 17.9377 15.4901L16.3107 17.5411C15.7907 18.1971 15.6407 18.5531 15.6407 18.9761C15.6407 19.6331 16.0647 20.0021 16.8437 20.0021ZM9.3787 20.1931C10.2407 20.1931 10.6917 19.6601 10.6917 18.7991V16.4611H11.1697L11.9627 19.0451C12.2087 19.8241 12.6467 20.1931 13.3297 20.1931C14.0547 20.1931 14.6017 19.6461 14.5737 18.8671C14.5607 18.5941 14.5197 18.4301 14.4237 18.1831L13.6037 15.9141C14.3967 15.3261 14.7107 14.2051 14.7107 13.2071C14.7107 10.9511 13.4527 9.8441 11.3207 9.8441H9.3787C8.5037 9.8441 8.0527 10.3631 8.0527 11.2521V18.7991C8.0527 19.6741 8.5037 20.1931 9.3787 20.1931ZM10.6917 14.6701V11.8401H11.1017C11.7307 11.8401 12.0037 12.6191 12.0037 13.2621C12.0037 13.9451 11.7577 14.6701 11.0737 14.6701Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM16.4477 19.7426H20.8907C21.4917 19.7426 21.7657 19.3316 21.7657 18.8396C21.7657 18.3206 21.4787 17.9236 20.8907 17.9236H18.1157V17.8146L19.7967 15.7366C20.9867 14.3006 21.5877 13.3026 21.5877 11.9766C21.5877 10.0626 20.2887 8.8596 18.4157 8.8596C16.7347 8.8596 15.3807 10.1716 15.3807 11.6076C15.3807 12.1816 15.7227 12.6056 16.3237 12.6056C16.8167 12.6056 17.1577 12.3726 17.3357 11.8266C17.5277 11.1426 17.7867 10.6366 18.4157 10.6366C19.0997 10.6366 19.4137 11.2796 19.4137 12.0446C19.4137 13.0566 18.7307 14.0686 17.9647 15.0256L15.9687 17.5686C15.5857 18.0606 15.3807 18.4026 15.3807 18.8396C15.3807 19.3866 15.7367 19.7426 16.4477 19.7426ZM8.6267 19.9336C9.3657 19.9336 9.7757 19.4686 9.7757 18.7166V15.8726H10.6637L11.7717 18.9496C12.0037 19.6056 12.3727 19.9336 12.9887 19.9336C13.5757 19.9336 14.0817 19.5236 14.0687 18.7856C14.0687 18.5796 13.9997 18.3476 13.8907 18.0746L12.8377 15.3806C13.7817 14.8066 14.1637 13.6586 14.1637 12.5376C14.1637 10.2946 12.8787 9.1466 10.7457 9.1466H8.6267C7.8617 9.1466 7.4507 9.5976 7.4507 10.3636V18.7166C7.4507 19.4686 7.8617 19.9336 8.6267 19.9336ZM9.7757 14.2326V10.9376H10.5407C11.3887 10.9376 11.7987 11.7166 11.7987 12.5916C11.7987 13.4666 11.4297 14.2326 10.5407 14.2326Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM16.6527 19.8794H20.9457C21.6017 19.8794 21.8747 19.4274 21.8747 18.9224C21.8747 18.4024 21.6017 17.9644 20.9457 17.9644H18.4157V17.8554L19.9477 16.0094C21.0277 14.6974 21.7107 13.7134 21.7107 12.3044C21.7107 10.3774 20.3847 9.2424 18.5257 9.2424C16.8707 9.2424 15.5037 10.4724 15.5037 11.9224C15.5037 12.5374 15.8727 12.9884 16.5157 12.9884C17.0217 12.9884 17.4177 12.7424 17.5957 12.1544C17.7597 11.5804 17.9787 11.1294 18.5257 11.1294C19.1407 11.1294 19.3727 11.7034 19.3727 12.3864C19.3727 13.3574 18.7307 14.3004 17.9507 15.2854L16.1467 17.5684C15.6957 18.1424 15.5177 18.4844 15.5177 18.9224C15.5177 19.5234 15.9137 19.8794 16.6527 19.8794ZM9.0237 20.0844C9.8297 20.0844 10.2677 19.5784 10.2677 18.7574V16.1874H10.9377L11.8807 19.0044C12.1137 19.7284 12.5237 20.0844 13.1657 20.0844C13.8227 20.0844 14.3557 19.5914 14.3277 18.8394C14.3277 18.5934 14.2737 18.4024 14.1637 18.1424L13.2347 15.6684C14.1097 15.0934 14.4507 13.9454 14.4507 12.9064C14.4507 10.6504 13.1797 9.5294 11.0467 9.5294H9.0237C8.2027 9.5294 7.7657 10.0074 7.7657 10.8414V18.7574C7.7657 19.5784 8.2027 20.0844 9.0237 20.0844ZM10.2677 14.4784V11.4164H10.8417C11.5667 11.4164 11.9077 12.2094 11.9077 12.9474C11.9077 13.7264 11.6077 14.4784 10.8277 14.4784Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM15.6677 19.236H20.3847C20.7677 19.236 21.0137 18.977 21.0137 18.594C21.0137 18.184 20.7677 17.938 20.3847 17.938H16.8847V17.842L19.1137 14.875C20.3707 13.248 20.7947 12.25 20.7947 11.074C20.7947 9.27 19.6737 7.93 17.8417 7.93C16.1597 7.93 14.9297 9.379 14.9297 10.814C14.9297 11.197 15.1617 11.512 15.5997 11.512C15.9687 11.512 16.1877 11.334 16.2967 10.979C16.5157 9.926 16.9397 9.215 17.8417 9.215C18.8257 9.215 19.3187 10.131 19.3187 11.143C19.3187 12.209 18.6897 13.234 17.9097 14.273L15.2987 17.732C15.0937 18.006 14.9157 18.266 14.9157 18.594C14.9157 18.977 15.1757 19.236 15.6677 19.236ZM7.7387 19.387C8.2307 19.387 8.5317 19.059 8.5317 18.553V14.82H10.1037L11.7307 18.758C11.8807 19.168 12.1267 19.387 12.5507 19.387C12.9337 19.387 13.3027 19.154 13.3027 18.607C13.3027 18.484 13.2477 18.279 13.1527 18.047L11.6207 14.479C12.7287 13.973 13.3167 12.852 13.3167 11.484C13.3167 9.379 12.0857 8.176 10.0077 8.176H7.7247C7.2047 8.176 6.9177 8.477 6.9177 8.996V18.553C6.9177 19.045 7.2187 19.387 7.7387 19.387ZM8.5317 13.604V9.461H9.8577C11.0197 9.461 11.7027 10.254 11.7027 11.525C11.7027 12.715 11.1287 13.604 9.8707 13.604Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM16.1877 19.5781H20.8227C21.3417 19.5781 21.6427 19.2231 21.6427 18.7301C21.6427 18.2241 21.3417 17.8961 20.8227 17.8961H17.7457V17.7871L19.6327 15.4221C20.9317 13.8081 21.4377 12.8101 21.4377 11.5531C21.4377 9.6931 20.1657 8.3941 18.2927 8.3941C16.5567 8.3941 15.2307 9.8031 15.2307 11.2241C15.2307 11.7581 15.5317 12.1401 16.0917 12.1401C16.5567 12.1401 16.8577 11.9221 17.0077 11.4431C17.2407 10.6091 17.5547 10.0491 18.2797 10.0491C19.0587 10.0491 19.4687 10.7461 19.4687 11.6481C19.4687 12.7011 18.7307 13.7811 17.9917 14.7111L15.7497 17.5821C15.4487 17.9651 15.2167 18.3061 15.2167 18.7301C15.2167 19.2231 15.5317 19.5781 16.1877 19.5781ZM8.1487 19.7561C8.8047 19.7561 9.2007 19.3321 9.2007 18.6481V15.4761H10.3497L11.6617 18.8811C11.8667 19.4551 12.1957 19.7561 12.7557 19.7561C13.2617 19.7561 13.7537 19.4411 13.7537 18.7301C13.7537 18.5531 13.6717 18.2931 13.5487 17.9921L12.3317 15.0391C13.3847 14.4651 13.8227 13.2891 13.8227 12.0991C13.8227 9.8711 12.5097 8.6951 10.3767 8.6951H8.1347C7.4507 8.6951 7.0687 9.1051 7.0687 9.7891V18.6481C7.0687 19.3181 7.4507 19.7561 8.1487 19.7561ZM9.2007 13.9451V10.3491H10.1987C11.1697 10.3491 11.6757 11.1291 11.6757 12.1401C11.6757 13.1521 11.2247 13.9451 10.1987 13.9451Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM16.0367 19.4684H20.7817C21.2737 19.4684 21.5607 19.1544 21.5607 18.6754C21.5607 18.1564 21.2597 17.8694 20.7817 17.8694H17.5407V17.7594L19.5367 15.2304C20.9047 13.5354 21.3557 12.5234 21.3557 11.3204C21.3557 9.4744 20.0977 8.1344 18.2107 8.1344C16.4607 8.1344 15.1347 9.5844 15.1347 11.0054C15.1347 11.5114 15.4357 11.8674 15.9547 11.8674C16.4067 11.8674 16.6797 11.6624 16.8297 11.2114C17.0757 10.2954 17.4177 9.7204 18.1977 9.7204C19.0317 9.7204 19.4827 10.4454 19.4827 11.4164C19.4827 12.5094 18.7307 13.6174 18.0057 14.5464L15.6267 17.5824C15.3807 17.9104 15.1207 18.2524 15.1207 18.6754C15.1207 19.1404 15.4217 19.4684 16.0367 19.4684ZM7.8747 19.6604C8.4907 19.6604 8.8727 19.2634 8.8727 18.6214V15.2574H10.1577L11.5937 18.8394C11.7847 19.3594 12.0857 19.6604 12.6327 19.6604C13.0837 19.6604 13.5757 19.4004 13.5757 18.6894C13.5757 18.5394 13.4807 18.2654 13.3577 17.9514L12.0587 14.8474C13.1657 14.2734 13.6307 13.0844 13.6307 11.8534C13.6307 9.6254 12.3047 8.4354 10.1717 8.4354H7.8617C7.2187 8.4354 6.8637 8.8324 6.8637 9.4744V18.6214C6.8637 19.2504 7.2187 19.6604 7.8747 19.6604ZM8.8727 13.7954V10.0214H9.9937C11.0467 10.0214 11.6077 10.8004 11.6077 11.8944C11.6077 12.9744 11.1157 13.7954 9.9937 13.7954Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM16.2967 19.6469H20.8497C21.4097 19.6469 21.6977 19.2769 21.6977 18.7849C21.6977 18.2659 21.3967 17.9099 20.8497 17.9099H17.9097V17.8009L19.7007 15.5589C20.9587 14.0269 21.5057 13.0159 21.5057 11.7309C21.5057 9.8579 20.2207 8.5999 18.3477 8.5999C16.6387 8.5999 15.2987 9.9529 15.2987 11.3889C15.2987 11.9359 15.6137 12.3319 16.1877 12.3319C16.6657 12.3319 16.9937 12.1129 17.1447 11.6079C17.3637 10.8419 17.6507 10.3089 18.3337 10.3089C19.0727 10.3089 19.4417 10.9789 19.4417 11.8259C19.4417 12.8649 18.7307 13.9039 17.9787 14.8479L15.8457 17.5819C15.5037 18.0059 15.2847 18.3479 15.2847 18.7719C15.2847 19.2909 15.6267 19.6469 16.2967 19.6469ZM8.3537 19.8379C9.0507 19.8379 9.4477 19.3869 9.4477 18.6759V15.6539H10.4867L11.7167 18.9079C11.9217 19.5099 12.2637 19.8379 12.8517 19.8379C13.3987 19.8379 13.9047 19.4829 13.8907 18.7579C13.8767 18.5669 13.8087 18.3199 13.6987 18.0329L12.5507 15.1899C13.5487 14.6149 13.9727 13.4529 13.9727 12.2909C13.9727 10.0489 12.6737 8.8869 10.5407 8.8869H8.3397C7.6287 8.8869 7.2327 9.3239 7.2327 10.0349V18.6759C7.2327 19.3869 7.6287 19.8379 8.3537 19.8379ZM9.4477 14.0819V10.6099H10.3497C11.2657 10.6099 11.7307 11.3889 11.7307 12.3319C11.7307 13.2889 11.3207 14.0819 10.3357 14.0819Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM15.1617 18.9352H19.8517C20.1117 18.9352 20.3027 18.7442 20.3027 18.4842C20.3027 18.2112 20.1117 18.0192 19.8517 18.0192H16.0097V17.9652L18.5667 14.3962C19.6737 12.8792 20.0567 11.8812 20.0567 10.7322C20.0567 9.0232 19.0997 7.6562 17.3497 7.6562C15.7367 7.6562 14.6697 9.1192 14.6697 10.5682C14.6697 10.8012 14.8067 11.0472 15.1207 11.0472C15.3667 11.0472 15.5447 10.9102 15.5857 10.6782C15.7777 9.4332 16.2827 8.5722 17.3637 8.5722C18.5527 8.5722 19.0857 9.7072 19.0857 10.7872C19.0857 11.8122 18.6487 12.7282 17.7867 13.9182L14.8617 17.9372C14.7247 18.1292 14.6427 18.2932 14.6427 18.4982C14.6427 18.7712 14.8477 18.9352 15.1617 18.9352ZM7.5607 19.0172C7.8747 19.0172 8.0797 18.7992 8.0797 18.4702V14.2462H10.0347L11.9077 18.6482C12.0177 18.9082 12.1817 19.0172 12.4417 19.0172C12.7287 19.0172 12.9607 18.8262 12.9607 18.5122C12.9607 18.4292 12.9197 18.3062 12.8657 18.1832L11.0607 14.0002C12.1677 13.5902 12.9067 12.5512 12.9067 11.0192C12.9067 9.0642 11.7847 7.8342 9.7887 7.8342H7.5327C7.1917 7.8342 7.0137 8.0392 7.0137 8.3812V18.4702C7.0137 18.7992 7.2187 19.0172 7.5607 19.0172ZM8.0797 13.3572V8.7362H9.6797C10.9917 8.7362 11.8257 9.5562 11.8257 11.0332C11.8257 12.3872 11.1567 13.3572 9.6937 13.3572Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM14.9027 18.7711H19.5777C19.7827 18.7711 19.9337 18.6211 19.9337 18.4161C19.9337 18.2111 19.7827 18.0601 19.5777 18.0601H15.5727V18.0061L18.2797 14.1501C19.3047 12.6871 19.6737 11.6891 19.6737 10.5551C19.6737 8.8871 18.8127 7.5061 17.1037 7.5061C15.5317 7.5061 14.5197 8.9691 14.5197 10.4451C14.5197 10.5961 14.6287 10.8011 14.8887 10.8011C15.0667 10.8011 15.2027 10.6781 15.2167 10.5001C15.3947 9.1741 15.9547 8.2171 17.1167 8.2171C18.4157 8.2171 18.9627 9.4881 18.9627 10.5961C18.9627 11.6071 18.6207 12.4691 17.7327 13.7261L14.6427 18.0331C14.5327 18.1831 14.5057 18.3061 14.5057 18.4431C14.5057 18.6621 14.6837 18.7711 14.9027 18.7711ZM7.4647 18.8261C7.6977 18.8261 7.8477 18.6621 7.8477 18.4161V13.9451H9.9937L11.9907 18.5801C12.0857 18.7581 12.1957 18.8261 12.3867 18.8261C12.6327 18.8261 12.7827 18.6481 12.7827 18.4571C12.7827 18.3891 12.7557 18.3061 12.7287 18.2381L10.7597 13.7401C11.8807 13.3851 12.6877 12.3871 12.6877 10.7601C12.6877 8.9001 11.6207 7.6421 9.6797 7.6421H7.4507C7.1917 7.6421 7.0547 7.7931 7.0547 8.0531V18.4161C7.0547 18.6621 7.2187 18.8261 7.4647 18.8261ZM7.8477 13.2341V8.3531H9.5977C10.9787 8.3531 11.8947 9.1871 11.8947 10.7731C11.8947 12.1951 11.1697 13.2341 9.6117 13.2341Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

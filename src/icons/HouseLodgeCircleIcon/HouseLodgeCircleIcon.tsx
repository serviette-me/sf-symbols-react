import { IconProps } from "../../types"

export default function HouseLodgeCircleIconIcon({
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
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM10.1987 15.1761L14.6287 11.4711C14.7247 11.3751 14.8337 11.3481 14.9297 11.3481C15.0387 11.3481 15.1487 11.3751 15.2437 11.4711L19.6737 15.1761C20.5077 15.8731 21.4097 14.7931 20.6447 14.1371L15.8867 10.1441C15.6137 9.9261 15.2577 9.8031 14.9297 9.8031C14.6157 9.8031 14.2737 9.9121 13.9997 10.1441L9.2287 14.1371C8.4627 14.7661 9.3657 15.8731 10.1987 15.1761ZM8.8047 13.6171L10.8687 11.8811L10.0487 11.8531C9.8167 11.8531 9.5837 11.9491 9.3927 12.0861L6.6307 14.0821C6.0427 14.5191 6.2757 15.3941 7.0407 15.3941H8.4767C8.1487 14.8751 8.1487 14.1641 8.8047 13.6171ZM21.0687 13.6171C21.7107 14.1371 21.7247 14.8751 21.3967 15.3941H22.8457C23.6117 15.3941 23.8297 14.5191 23.2557 14.0821L20.4807 12.0861C20.2887 11.9491 20.0567 11.8531 19.8237 11.8531L19.0037 11.8811ZM11.1017 18.4021H18.7717C19.5507 18.4021 20.0427 17.9371 20.0427 17.1851V16.0781C19.7697 16.0511 19.5097 15.9141 19.2497 15.6951L14.9297 12.0991L10.6367 15.6951C10.3497 15.9141 10.1037 16.0511 9.8297 16.0781V17.1851C9.8297 17.9371 10.3227 18.4021 11.1017 18.4021ZM13.7127 16.9531V15.2581C13.7127 15.0391 13.8357 14.9161 14.0547 14.9161H15.8187C16.0367 14.9161 16.1597 15.0391 16.1597 15.2581V16.9531ZM9.1737 17.1851V16.0921L7.0547 16.0781V17.1851C7.0547 17.9371 7.5327 18.4021 8.3257 18.4021H9.5707C9.2967 18.0741 9.1737 17.6641 9.1737 17.1851ZM20.7267 17.1851C20.7267 17.6641 20.5757 18.0741 20.3027 18.4021H21.5467C22.3397 18.4021 22.8317 17.9371 22.8317 17.1851V16.0781L20.7267 16.0921Z"
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
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM8.9827 14.7246L14.1637 10.5406C14.2457 10.4726 14.3417 10.4456 14.4237 10.4456C14.5197 10.4456 14.6157 10.4726 14.6977 10.5406L19.8657 14.7246C20.5627 15.2856 21.3007 14.3826 20.6857 13.8766L15.2577 9.4746C15.0257 9.2836 14.7107 9.1736 14.4237 9.1736C14.1507 9.1736 13.8497 9.2836 13.6037 9.4746L8.1757 13.8766C7.5607 14.3826 8.2987 15.2856 8.9827 14.7246ZM10.1577 18.2106H18.7027C19.4547 18.2106 19.9197 17.7736 19.9197 17.0216V15.5316C19.6877 15.4766 19.4827 15.3536 19.2497 15.1756L14.4237 11.2796L9.6117 15.1756C9.3657 15.3536 9.1597 15.4766 8.9417 15.5316V17.0216C8.9417 17.7736 9.3927 18.2106 10.1577 18.2106ZM7.7107 13.3026L9.9807 11.4566H8.9547C8.7367 11.4566 8.5177 11.5116 8.3397 11.6486L5.2087 13.8636C4.7717 14.1776 4.9487 14.8746 5.5507 14.8746H7.3557C7.1097 14.3966 7.1227 13.7676 7.7107 13.3026ZM21.1507 13.3026C21.7247 13.7536 21.7517 14.3966 21.4917 14.8746H23.3107C23.9117 14.8746 24.0897 14.2046 23.6527 13.8636L20.5217 11.6486C20.3297 11.5116 20.1387 11.4566 19.8927 11.4566H18.8667ZM13.1117 17.0356V15.0116C13.1117 14.7926 13.2477 14.6566 13.4667 14.6566H15.3947C15.6137 14.6566 15.7497 14.7926 15.7497 15.0116V17.0356ZM8.2027 17.0216V15.5996H5.8517V17.0216C5.8517 17.7736 6.3027 18.2106 7.0817 18.2106H8.5587C8.3257 17.8826 8.2027 17.4866 8.2027 17.0216ZM20.6577 17.0216C20.6577 17.4866 20.5347 17.8826 20.2887 18.2106H21.7797C22.5447 18.2106 23.0097 17.7736 23.0097 17.0216V15.5996H20.6577Z"
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
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM9.6247 14.9704L14.4097 11.0334C14.4917 10.9644 14.6017 10.9234 14.6977 10.9234C14.7927 10.9234 14.9027 10.9644 14.9847 11.0334L19.7697 14.9704C20.5347 15.6134 21.3557 14.6014 20.6577 14.0134L15.5857 9.8304C15.3257 9.6254 14.9977 9.5154 14.6977 9.5154C14.3967 9.5154 14.0817 9.6254 13.8227 9.8304L8.7227 14.0134C8.0387 14.5884 8.8597 15.6134 9.6247 14.9704ZM8.2847 13.4664L10.4587 11.6894L9.5427 11.6754C9.2967 11.6754 9.0777 11.7444 8.9007 11.8804L5.9607 13.9864C5.4417 14.3694 5.6467 15.1624 6.3437 15.1624H7.9567C7.6567 14.6564 7.6697 13.9724 8.2847 13.4664ZM21.1097 13.4664C21.7107 13.9724 21.7387 14.6564 21.4377 15.1624H23.0647C23.7617 15.1624 23.9527 14.3824 23.4477 13.9864L20.4937 11.8804C20.3027 11.7444 20.0977 11.6754 19.8517 11.6754L18.9357 11.6894ZM10.6507 18.3204H18.7437C19.5097 18.3204 19.9887 17.8694 19.9887 17.1174V15.8184C19.7287 15.7914 19.4957 15.6544 19.2497 15.4634L14.6977 11.7164L10.1577 15.4634C9.8847 15.6544 9.6657 15.7914 9.4067 15.8184V17.1174C9.4067 17.8694 9.8847 18.3204 10.6507 18.3204ZM13.4257 16.9944V15.1484C13.4257 14.9294 13.5627 14.8064 13.7817 14.8064H15.6267C15.8317 14.8064 15.9687 14.9294 15.9687 15.1484V16.9944ZM8.7087 17.1174V15.8734L6.4937 15.8594V17.1174C6.4937 17.8694 6.9457 18.3204 7.7387 18.3204H9.0917C8.8317 17.9924 8.7087 17.5824 8.7087 17.1174ZM20.6987 17.1174C20.6987 17.5824 20.5627 17.9924 20.3027 18.3204H21.6567C22.4357 18.3204 22.9137 17.8694 22.9137 17.1174V15.8594L20.6987 15.8734Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM7.2047 14.014L13.4527 9.146C13.5347 9.078 13.6167 9.051 13.6987 9.051C13.7677 9.051 13.8637 9.078 13.9317 9.146L20.1937 14.014C20.6717 14.396 21.1777 13.754 20.7537 13.426L14.4097 8.449C14.2047 8.285 13.9457 8.176 13.6987 8.176C13.4527 8.176 13.1937 8.285 12.9747 8.449L6.6307 13.426C6.2067 13.74 6.7127 14.396 7.2047 14.014ZM8.9547 17.76H18.4297C19.1817 17.76 19.5917 17.35 19.5917 16.598V14.451C19.3867 14.328 19.2087 14.205 18.9907 14.041L13.6987 9.898L8.3807 14.041C8.1757 14.205 7.9977 14.328 7.7927 14.451V16.598C7.7927 17.35 8.2027 17.76 8.9547 17.76ZM6.1797 12.824L8.5587 10.965H7.5057C7.2327 10.965 7.0277 11.02 6.8357 11.156L3.3227 13.467C3.0757 13.645 3.1717 14.041 3.5407 14.041H5.7967C5.6737 13.645 5.7147 13.18 6.1797 12.824ZM21.2047 12.824C21.6697 13.166 21.7247 13.645 21.5877 14.041H23.8577C24.2127 14.041 24.3227 13.658 24.0627 13.467L20.5487 11.156C20.3577 11.02 20.1657 10.965 19.8787 10.965H18.8257ZM12.2087 16.953V14.451C12.2087 14.26 12.3597 14.109 12.5647 14.109H14.8337C15.0527 14.109 15.1757 14.26 15.1757 14.451V16.953ZM7.0407 16.598V14.711H4.1287V16.598C4.1287 17.35 4.5387 17.76 5.2907 17.76H7.3687C7.1507 17.445 7.0407 17.049 7.0407 16.598ZM20.3437 16.598C20.3437 17.049 20.2347 17.445 20.0157 17.76H22.0937C22.8457 17.76 23.2697 17.35 23.2697 16.598V14.711H20.3437Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM8.2167 14.4241L13.8637 9.9391C13.9317 9.8851 14.0277 9.8571 14.0957 9.8571C14.1777 9.8571 14.2737 9.8851 14.3417 9.9391L20.0017 14.4241C20.6037 14.9161 21.2327 14.1231 20.7127 13.6991L14.8617 9.0371C14.6427 8.8731 14.3557 8.7641 14.0957 8.7641C13.8497 8.7641 13.5757 8.8591 13.3437 9.0371L7.4917 13.6991C6.9727 14.1091 7.6017 14.9161 8.2167 14.4241ZM9.5567 18.0741H18.6487C19.4007 18.0741 19.8377 17.6501 19.8377 16.8981V15.1621C19.6467 15.0941 19.4687 14.9841 19.2367 14.8341L14.0957 10.7461L8.9547 14.8341C8.7367 14.9841 8.5727 15.0941 8.3667 15.1621V16.8981C8.3667 17.6501 8.8047 18.0741 9.5567 18.0741ZM7.0137 13.0841L9.4197 11.1831H8.2717C8.0387 11.1831 7.8337 11.2381 7.6697 11.3611L4.3067 13.7131C3.9647 13.9591 4.1017 14.5331 4.6077 14.5331H6.6447C6.4397 14.0681 6.4807 13.5081 7.0137 13.0841ZM21.1917 13.0841C21.7247 13.4941 21.7657 14.0681 21.5607 14.5331H23.6117C24.1167 14.5331 24.2537 13.9861 23.8987 13.7131L20.5347 11.3611C20.3707 11.2381 20.1797 11.1831 19.9477 11.1831H18.7847ZM12.7287 17.0901L12.7147 14.8341C12.7147 14.6151 12.8787 14.4781 13.0977 14.4781H15.1207C15.3397 14.4781 15.4907 14.6151 15.4907 14.8341V17.0901ZM7.5877 16.8981V15.2851L5.0857 15.2991V16.8981C5.0857 17.6501 5.5237 18.0741 6.2887 18.0741H7.9297C7.6977 17.7461 7.5877 17.3631 7.5877 16.8981ZM20.6307 16.8981C20.6307 17.3631 20.5077 17.7461 20.2887 18.0741H21.9157C22.6817 18.0741 23.1187 17.6501 23.1187 16.8981V15.2991L20.6307 15.2851Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM7.7797 14.2594L13.6987 9.6114C13.7537 9.5564 13.8637 9.5294 13.9177 9.5294C13.9867 9.5294 14.0817 9.5564 14.1507 9.6114L20.0707 14.2594C20.6167 14.6974 21.1917 13.9724 20.7267 13.6034L14.6427 8.7914C14.4377 8.6404 14.1637 8.5314 13.9177 8.5314C13.6717 8.5314 13.4257 8.6274 13.2067 8.7914L7.1097 13.6034C6.6447 13.9724 7.2187 14.6974 7.7797 14.2594ZM9.2147 18.0054H18.6207C19.3597 18.0054 19.7967 17.5824 19.7967 16.8304V14.9704C19.6187 14.8884 19.4547 14.7794 19.2367 14.6284L13.9177 10.4454L8.5857 14.6284C8.3807 14.7794 8.2307 14.8884 8.0387 14.9704V16.8304C8.0387 17.5824 8.4767 18.0054 9.2147 18.0054ZM6.6167 12.9744L9.1057 11.0334H7.8747C7.6567 11.0334 7.4507 11.0744 7.2867 11.1974L3.7867 13.6174C3.4997 13.8364 3.6227 14.3414 4.0737 14.3414H6.2477C6.0707 13.8904 6.1117 13.3574 6.6167 12.9744ZM21.2187 12.9744C21.7387 13.3574 21.7797 13.8904 21.6017 14.3414H23.7757C24.2267 14.3414 24.3497 13.8634 24.0347 13.6174L20.5487 11.1974C20.3847 11.0744 20.2067 11.0334 19.9607 11.0334H18.7307ZM12.5097 17.1034L12.4957 14.7524C12.4957 14.5194 12.6597 14.3694 12.8927 14.3694H14.9707C15.1897 14.3694 15.3397 14.5194 15.3397 14.7524V17.1034ZM7.2327 16.8304V15.1074L4.6487 15.1214V16.8304C4.6487 17.5824 5.0857 18.0054 5.8377 18.0054H7.5607C7.3557 17.6774 7.2327 17.2954 7.2327 16.8304ZM20.6037 16.8304C20.6037 17.2954 20.4937 17.6774 20.2757 18.0054H21.9977C22.7497 18.0054 23.1877 17.5824 23.1877 16.8304V15.1214L20.6037 15.1074Z"
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
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM8.5447 14.5609L13.9867 10.1989C14.0687 10.1449 14.1637 10.1039 14.2457 10.1039C14.3277 10.1039 14.4237 10.1449 14.4917 10.1989L19.9477 14.5609C20.5897 15.0799 21.2597 14.2329 20.6987 13.7809L15.0387 9.2289C14.8067 9.0509 14.5057 8.9419 14.2457 8.9419C13.9727 8.9419 13.6987 9.0369 13.4527 9.2289L7.7927 13.7809C7.2327 14.2329 7.9027 15.0799 8.5447 14.5609ZM9.8167 18.1429H18.6757C19.4277 18.1429 19.8787 17.7049 19.8787 16.9529V15.3259C19.6597 15.2579 19.4687 15.1489 19.2367 14.9849L14.2457 10.9789L9.2417 14.9849C9.0097 15.1489 8.8187 15.2579 8.6137 15.3259V16.9529C8.6137 17.7049 9.0647 18.1429 9.8167 18.1429ZM7.3147 13.1799L9.6657 11.3069L8.5727 11.2929C8.3397 11.2929 8.1347 11.3609 7.9567 11.4849L4.6897 13.7809C4.3067 14.0549 4.4707 14.6839 5.0177 14.6839H6.9587C6.7267 14.2189 6.7537 13.6169 7.3147 13.1799ZM21.1777 13.1799C21.7247 13.6039 21.7657 14.2189 21.5327 14.6839H23.4747C24.0217 14.6839 24.1857 14.0819 23.7887 13.7809L20.5347 11.4849C20.3577 11.3609 20.1527 11.2929 19.9197 11.2929L18.8257 11.3069ZM12.8927 17.0629V14.9159C12.8927 14.6969 13.0427 14.5609 13.2617 14.5609H15.2437C15.4627 14.5609 15.5997 14.6969 15.5997 14.9159V17.0629ZM7.8477 16.9529V15.4219H5.4137V16.9529C5.4137 17.7049 5.8657 18.1429 6.6307 18.1429H8.2027C7.9707 17.8149 7.8477 17.4179 7.8477 16.9529ZM20.6447 16.9529C20.6447 17.4179 20.5217 17.8149 20.2887 18.1429H21.8617C22.6267 18.1429 23.0777 17.7049 23.0777 16.9529V15.4219H20.6447Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM6.4397 13.7132L13.1247 8.5452C13.2207 8.4632 13.3027 8.4352 13.3987 8.4352C13.4937 8.4352 13.5627 8.4632 13.6577 8.5452L20.3437 13.7132C20.7407 14.0132 21.1507 13.4672 20.7947 13.1792L14.1097 7.9982C13.9177 7.8472 13.6447 7.7242 13.3987 7.7242C13.1527 7.7242 12.8787 7.8342 12.6737 7.9982L6.0017 13.1792C5.6327 13.4532 6.0427 14.0132 6.4397 13.7132ZM8.6137 17.4452H18.1697C18.9357 17.4452 19.3187 17.0492 19.3187 16.2972V13.7672C19.0997 13.6032 18.8807 13.4532 18.6617 13.2752L13.3987 9.1872L8.1207 13.2752C7.9027 13.4532 7.6977 13.6032 7.4787 13.7672V16.2972C7.4787 17.0492 7.8477 17.4452 8.6137 17.4452ZM5.5917 12.6462L7.8337 10.8962H7.0277C6.6717 10.8962 6.4807 10.9652 6.2477 11.1012L2.6937 13.2752C2.5157 13.3852 2.5837 13.6582 2.8297 13.6582H5.2227C5.1407 13.3162 5.2087 12.9472 5.5917 12.6462ZM21.2047 12.6462C21.5877 12.9332 21.6427 13.3162 21.5737 13.6582H23.9667C24.1987 13.6582 24.2677 13.3982 24.0897 13.2752L20.5347 11.1012C20.3167 10.9652 20.1117 10.8962 19.7697 10.8962H18.9487ZM11.8257 16.7482L11.8127 14.0542C11.8127 13.9042 11.9487 13.7812 12.1137 13.7812H14.6697C14.8617 13.7812 14.9707 13.9042 14.9707 14.0542V16.7482ZM6.7947 16.2972V14.1912H3.4317V16.2972C3.4317 17.0492 3.8277 17.4452 4.5667 17.4452H7.1227C6.9047 17.1442 6.7947 16.7482 6.7947 16.2972ZM20.0017 16.2972C20.0017 16.7482 19.8927 17.1442 19.6597 17.4452H22.2167C22.9687 17.4452 23.3657 17.0492 23.3657 16.2972V14.1912H20.0017Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM6.0567 13.5491L12.9607 8.2301C13.0707 8.1351 13.1387 8.1071 13.2477 8.1071C13.3437 8.1071 13.4117 8.1351 13.5217 8.2301L20.4397 13.5491C20.7817 13.7951 21.1367 13.3161 20.8087 13.0561L13.9587 7.7651C13.7677 7.6011 13.4807 7.4781 13.2477 7.4781C13.0017 7.4781 12.7147 7.6011 12.5237 7.7651L5.6737 13.0561C5.3457 13.3031 5.7007 13.7951 6.0567 13.5491ZM8.4357 17.2811H18.0467C18.8127 17.2811 19.1817 16.8711 19.1817 16.1191V13.3981C18.9487 13.2341 18.7167 13.0561 18.4977 12.8791L13.2477 8.8181L7.9847 12.8791C7.7657 13.0561 7.5327 13.2341 7.3007 13.3981V16.1191C7.3007 16.8711 7.6697 17.2811 8.4357 17.2811ZM5.2907 12.5371L7.4647 10.8421H6.7817C6.3847 10.8421 6.1937 10.9241 5.9477 11.0601L2.3787 13.1661C2.2417 13.2481 2.2827 13.4531 2.4747 13.4531H4.9217C4.8667 13.1391 4.9487 12.8101 5.2907 12.5371ZM21.1917 12.5371C21.5327 12.7971 21.6157 13.1391 21.5607 13.4531H24.0217C24.1987 13.4531 24.2407 13.2481 24.1037 13.1661L20.5347 11.0601C20.3027 10.9241 20.0977 10.8421 19.7007 10.8421H19.0177ZM11.6347 16.6391L11.6207 13.8491C11.6207 13.7131 11.7307 13.5901 11.8947 13.5901H14.5877C14.7657 13.5901 14.8617 13.7131 14.8617 13.8491V16.6391ZM6.6577 16.1191V13.9181H3.0627V16.1191C3.0627 16.8711 3.4457 17.2811 4.1977 17.2811H6.9997C6.7677 16.9801 6.6577 16.5841 6.6577 16.1191ZM19.8237 16.1191C19.8237 16.5841 19.7147 16.9801 19.4827 17.2811H22.2847C23.0367 17.2811 23.4197 16.8711 23.4197 16.1191V13.9181H19.8237Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}

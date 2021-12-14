import React from "react";

export const Shapes = () => {
  return (
    <div className="shapes hidden md:inline relative z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 150"
        width="20"
        height="20"
        className="object_1"
      >
        <circle cx="100" cy="100" r="50" fill="#FF849D" />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="object_2"
      >
        <path
          d="M4.85298 0.252806L9.34825 5.10621L15.9588 4.85297L11.1054 9.34824L11.3586 15.9588L6.86332 11.1054L0.252809 11.3586L5.10621 6.86332L4.85298 0.252806Z"
          fill="#5CBDB9"
          fillOpacity="0.75"
        />
      </svg>

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="object_3"
      >
        <circle cx="7" cy="7" r="7" fill="#FBE3E8" />
      </svg>

      <svg
        width="25"
        height="27"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="object_4"
      >
        <path
          d="M2.19359 24.1228L6.15948 3.72009L21.8458 17.356L2.19359 24.1228Z"
          fill="white"
          stroke="#5CBDB9"
          strokeWidth="3"
        />
      </svg>
      <svg
        width="753"
        height="435"
        viewBox="0 0 753 435"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="leftBlob"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M733.175 217.621C722.153 258.439 686.663 292.672 654.018 328.576C619.565 366.468 604.88 425.684 536.852 433.538C463.552 442.001 415.073 383.839 347.523 363.962C304.757 351.378 256.464 352.649 214.727 338.752C163.095 321.561 110.037 304.45 77.2056 273.958C37.2111 236.814 -24.5792 188.023 10.2684 148.862C48.1946 106.242 164.566 134.308 227.099 105.512C280.905 80.7348 266.685 10.4913 331.517 0.929042C394.309 -8.33209 428.397 54.4022 489.838 66.7602C565.161 81.9103 664.894 44.3493 721.321 79.3318C774.545 112.329 745.717 171.174 733.175 217.621Z"
          fill="#EDFEFC"
        />
      </svg>

      <svg
        width="368"
        height="573"
        viewBox="0 0 368 573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rightBlob"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M323.951 16.1725C356.813 25.5206 376.222 61.2889 409.357 69.6181C461.245 82.6613 522.414 47.5961 566.943 77.2545C610.524 106.282 644.62 166.865 631.455 217.546C617.416 271.588 538.075 277.354 503.562 321.244C476.01 356.281 480.24 406.906 454.137 443.035C418.045 492.99 384.348 557.58 323.951 569.844C264.851 581.844 201.067 546.317 159.187 502.926C119.603 461.913 133.162 393.504 105.601 343.611C78.7975 295.089 -12.9543 271.049 1.54298 217.546C18.1513 156.252 120.062 170.781 164.676 125.589C193.508 96.3845 171.152 34.7163 204.978 11.4791C238.258 -11.3832 285.115 5.12507 323.951 16.1725Z"
          fill="#EDFEFC"
        />
      </svg>
    </div>
  );
};

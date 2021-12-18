const TableBody = ({ ...props }) => {
  return (
    <>
      <tr>
        <td className="text-center md:text-left md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          <div className="py-3">{props.col1}</div>
        </td>
        <td className=" text-center md:text-left md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          <div className="flex justify-center">{props.col2}</div>
        </td>
        <td className=" text-center md:text-left md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          <div className="flex justify-center">{props.col3}</div>
        </td>
        <td className="text-center md:text-left md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          <div className="flex justify-center">{props.col4}</div>
        </td>
      </tr>
    </>
  );
};

export default TableBody;

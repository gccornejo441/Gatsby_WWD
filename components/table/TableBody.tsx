const TableBody = ({ ...props }) => {
  return (
    <>
      <tr>
        <td className="md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          <div className="py-3">{props.col1}</div>
        </td>
        <td className=" md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          {props.col2}
        </td>
        <td className=" md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          {props.col3}
        </td>
        <td className="md:pl-5 text-xs sm:text-base md:text-lg border-b border-midGreen text-gray-700">
          {props.col4}
        </td>
      </tr>
    </>
  );
};

export default TableBody;

export const handleCreateSingleUserPayroll = (req, res) => {
  const {
    basicSalary,
    payStartPeriod,
    payEndPeriod,
    deduction,
    allowance,
    overtimePay,
    netPay,
    paymentDate,
    paymentStatus,
  } = req.body;

  const { id } = req.user;
};

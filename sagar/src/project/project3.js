// import {
//     Grid
//     , Avatar
//     , TextField
//     , Box
//     , TableContainer
//     , Paper
//     , tableCellClasses,
// } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import React,
// {
//     useEffect
//     , useRef
//     , useState,
// } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Radio from '@mui/joy/Radio';
// import RadioGroup from '@mui/joy/RadioGroup';
// import axios from 'axios';
// import { PropagateLoader } from 'react-spinners';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// // import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
// // import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
// // import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import DeviceHubIcon from '@mui/icons-material/DeviceHub';
// // import FunctionsIcon from '@mui/icons-material/Functions';
// // import ContactMailIcon from '@mui/icons-material/ContactMail';
// // import ContactsIcon from '@mui/icons-material/Contacts';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));
// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th": {
//         border: 0,
//     },
// }));


// const Project = () => {

//     const [open, setOpen] = useState(false);
//     const [user, updateUser] = useState("");
//     const [email, updateEmail] = useState("");
//     const [date, updateDate] = useState("");
//     const [gender, updateGender] = useState("");
//     const [qualification, updateQualification] = useState("");
//     const [profile, updateProfile] = useState("");
//     const [data, setData] = useState([]);

//     const [recount, setCount] = useState(false);
//     const [print, setPrint] = useState(null);
//     const inputImage = useRef();
//     const [clickEdit, setClickEdit] = useState(false);
//     const [id, setId] = useState("");
//     const [emailArray, setEmailArray] = useState([]);
//     const [editEmail, setEditEmai] = useState("");
//     // eslint-disable-next-line
//     const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const regexUser = /^[A-Za-z]*$/;
//     const [emp, setAddEmp] = useState(true);
//     const [deleteData, setDeleteData] = useState(true);
//     const [editData, setEditData] = useState(true);
//     useEffect(() => {
//         console.log("useEffect");
//         // editData(true);
//         fetchData();

//     }, [recount, clickEdit]);


//     const handleClickOpen = () => {
//         console.log(process.env.REACT_APP_BASE_URL);

//         setAddEmp(false);
//         setPrint(null);
//         setOpen(true);
//         setPrint("print");
//         setAddEmp(true);
//         updateUser("");
//         updateEmail("");
//         updateGender("");
//         updateDate("");
//         updateQualification("");
//         updateProfile("");

//     };

//     const CloseUp = () => {
//         updateUser("");
//         updateEmail("");
//         updateGender("");
//         updateDate("");
//         updateQualification("");
//         updateProfile("");
//         setOpen(false);
//         setClickEdit(false);

//     };

//     //submit button
//     const handleClose = async () => {
//         setAddEmp(true);
//         console.log("handle close is clicked");
//         let payload = { user, email, date, gender, qualification, profile };

//         if (clickEdit && jsonServer()) {
//             await axios.put(`${process.env.REACT_APP_BASE_URL}/${id}`, payload).then(() => { setClickEdit(false); });
//             alert("editted sucessfully");
//             setOpen(false);

//         }

//         else if (jsonServer()) {
//             await axios.post(process.env.REACT_APP_BASE_URL, payload).then(res => {
//                 console.log(res);
//                 setCount(!recount);
//             }).catch(err => console.log(err));
//             alert('data submmited');
//             setOpen(false);

//         }




//     };
//     let count = 0;
//     //validation
//     const jsonServer = () => {
//         for (let i of data) {
//             emailArray.push(i.email);//its an array
//         }
//         //this condition only execute when the editFunc is clicked
//         //by doing this we are setting the value of the array by removing the editted value of the email

//         if (clickEdit == true) {
//             setEmailArray(emailArray.splice(emailArray.indexOf(editEmail), 1));
//             count++;
//             //by doing this we are setting the value of emailArray by removing the 
//             //particular value which is equal to the editted email.
//             //SetPrint2
//         }
//         //it excute every time when we are adding the email id and also it execute while the editFunc is Clicked
//         for (let j of emailArray) {

//             if (email === j && count === 0) {
//                 alert("email is availible");
//                 return false;
//             }
//         }
//         if (user === "" || email === "" || date === "" || profile === "" || qualification === "" || gender === "") {
//             alert("all the fiels are mandatory");
//             return false;
//         }
//         if (!regxEmail.test(email)) {
//             alert("incorectly Written Email");
//             return false;
//         }
//         if (!regexUser.test(user)) {
//             alert("incorrectly written username");
//             return false;
//         }

//         return true;
//     };
//     let fetchData = async () => {
//         await axios.get(process.env.REACT_APP_BASE_URL).then((response) => {
//             console.log("fetch data");
//             setData(response.data);
//             console.log(response.data);
//             setPrint("print");
//             console.log(print);
//         });
//     };

//     let delFunc = async (e) => {

//         console.log(e);
//         setDeleteData(false);

//         console.log("delete is clicked with id" + " " + e);
//         await axios.delete(process.env.REACT_APP_BASE_URL + "/" + e).then(() => {
//             setCount(!recount);
//         });
//         setDeleteData(true);

//     };
//     let editFunc = async (e) => {
//         let count11 = 0;
//         setEditData(false);
//         console.log(e);
//         let d = e;
//         setId(d);//id is the empty string it set the id;

//         console.log("edit is clicked with id" + " " + d);

//         await axios.get(process.env.REACT_APP_BASE_URL + "/" + d).then((res) => {

//             setClickEdit(true);
//             console.log(res);
//             console.log(res.data.user);
//             updateUser(res.data.user);
//             updateEmail(res.data.email);
//             updateDate(res.data.date);
//             updateGender(res.data.gender);
//             updateQualification(res.data.qualification);
//             // updateProfile(res.data.profile);
//             count11++;
//             // updateProfile( inputImage.current.children[0].children[0].value)
//             //it will go to the jsonserver for the validation
//             setEditEmai(res.data.email);//by default the value is empty string it update the useState
//         }).then(() => {
//             if (count11 > 0) {
//                 setEditData(true);
//             }
//         });
//         setOpen(true); //form wiil open


//         console.log("axios delete");
//     };

//     const base64 = () => {
//         const reader = new FileReader();
//         reader.onload = () => { updateProfile(reader.result); };
//         if (inputImage.current.children[0].children[0].files[0]) {
//             reader.readAsDataURL(inputImage.current.children[0].children[0].files[0]);
//         }
//         console.log(inputImage.current);
//     };

//     const propagate = { padding: "15px", fontSize: "20px", display: "flex", justifyContent: "center", margin: "auto", width: "100vw" };
//     const radio = { padding: "5px" };
//     const boxStyle = { margin: "5px", borderBox: "1px solid red" };
//     const buttonCenter = { padding: "10px", fontSize: "15px", color: "white", backgroundColor: "black", display: "flex", margin: "auto", marginTop: "10px" };
//     const boldStyle = { fontSize: "18px", backgroundColor: "black", textAlign: "center" };
//     const centerData = { textAlign: "center" };
//     const centerHeader = { fontSize: "19px", display: "flex", margin: "auto" };
//     const ProfielAlign = { paddingLeft: "28px" };
//     const DeleteIconStyle = { color: "red" };
//     const formStyle = { fontSize: "15px", padding: "2px" };
//     // const RegistrationStyle = { padding: "5px", textAlign: "center", fontSize: "30px", backgroundColor: "lightBlue", fontWeight: "bold" };
//     // const regxStyle = { backgroundColor: "lightGreen", marginTop: "15px" };

//     return (
//         <>
//             <AppBar position="static">
//                 <Toolbar variant="dense">

//                     <Typography variant="h6" color="inherit" component="div" style={centerHeader} tabIndex="0">
//                         <AssignmentIcon /> Employee Registration Form
//                     </Typography>
//                 </Toolbar>
//             </AppBar>

//             <Box style={boxStyle}>

//                 <Grid container md={12} xl={12} xs={12}>
//                     <TableContainer component={Paper} sx={{ maxHeight: 440 }}>

//                         <Table stickyHeader aria-label="sticky table">
//                             <TableHead>
//                                 <TableRow>
//                                     <StyledTableCell style={boldStyle} tabIndex="0" >ID</StyledTableCell>
//                                     <StyledTableCell align="right" style={boldStyle} tabIndex="0">UserName</StyledTableCell>
//                                     <StyledTableCell align="right" style={boldStyle} tabIndex="0">Email</StyledTableCell>
//                                     <StyledTableCell align="right" style={boldStyle} tabIndex="0" >Date</StyledTableCell>
//                                     <StyledTableCell align="right" style={boldStyle} tabIndex="0">Gender</StyledTableCell>
//                                     <StyledTableCell align="right" style={boldStyle} tabIndex="0">Qualification</StyledTableCell>
//                                     <StyledTableCell align="right" style={boldStyle} tabIndex="0" >Profile </StyledTableCell>
//                                     <StyledTableCell align="right" style={boldStyle} tabIndex="0"> operation</StyledTableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>

//                                 {(print && deleteData && editData) ? data.map((row) => (
//                                     <StyledTableRow component="th" scope="row"
//                                         key={row.name}
//                                         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                                     >
//                                         <StyledTableCell style={centerData} tabIndex="0" alt={"id"}>{row.id}</StyledTableCell>
//                                         <StyledTableCell align="right" style={centerData} tabIndex="0">{row.user}</StyledTableCell>
//                                         <StyledTableCell align="right" style={centerData} tabIndex="0">{row.email}</StyledTableCell>
//                                         <StyledTableCell align="right" style={centerData} tabIndex="0">{row.date}</StyledTableCell>
//                                         <StyledTableCell align="right" style={centerData} tabIndex="0">{row.gender}</StyledTableCell>
//                                         <StyledTableCell align="right" style={centerData} tabIndex="0">{row.qualification}</StyledTableCell>
//                                         <StyledTableCell align="right" style={ProfielAlign} tabIndex="0"><Avatar alt={`${row.user}`} src={row.profile} size="lg" /></StyledTableCell>
//                                         <StyledTableCell align="right" style={centerData} ><Button id={row.id} onClick={() => { editFunc(row.id); }} aria-label={"edit"}  >{<EditIcon />}</Button>
//                                             <Button id={row.id} onClick={() => { delFunc(row.id); }} aria-label={"delete"} ><DeleteOutlineIcon style={DeleteIconStyle} /></Button></StyledTableCell>
//                                     </StyledTableRow>
//                                 )) : <PropagateLoader color='rgba(214, 54, 78, 1)' size="20" style={propagate} />}



//                             </TableBody>
//                         </Table>
//                     </TableContainer>


//                 </Grid>

//                 <Button variant="outlined" onClick={handleClickOpen} style={buttonCenter} >

//                     Add Employee
//                 </Button>






//             </Box>




//             <Box >
//                 {emp ? <Box >
//                     <Dialog open={open} PaperProps={{
//                         style: {
//                             backgroundColor: "#eeeeee",
//                             color: "black"
//                         },
//                     }} >
//                         <DialogTitle style={{ backgroundColor: "#2979ff", display: "flex", justifyContent: "center", color: "white", }} tabIndex="0" >Registration</DialogTitle>
//                         <DialogContent>
//                             <DialogContentText style={{ color: "red" }} tabIndex="0">
//                                 * All the Details are Mandatory
//                             </DialogContentText>
//                             <Box sx={{ color: "black", p: 2, borderRadius: "25px", fontSize: "29px" }}>
//                                 <Grid container spacing={2}>

//                                     <Grid item xs={12}>
//                                         <form>
//                                             <FormControl>
//                                                 <TextField fullWidth label='Name' style={formStyle} name="user" onChange={(e) => { if (e.target.value.match(regexUser)) { updateUser(e.target.value); } }} value={user} />
//                                                 <TextField fullWidth label='Email' style={formStyle} name="email" onChange={(e) => updateEmail(e.target.value)} value={email} />
//                                                 <TextField fullWidth label='date' style={formStyle} name="date" onChange={(e) => { updateDate(e.target.value); }} type="date" value={date} />
//                                             </FormControl>

//                                             <FormControl>
//                                                 <FormLabel style={formStyle} name="gender" tabIndex="0" >Gender</FormLabel>
//                                                 <RadioGroup style={{ display: "initial" }} value={gender} onChange={(e) => { updateGender(e.target.value); }} >
//                                                     <Radio value="female" label="Female" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                     <Radio value="male" label="Male" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                 </RadioGroup>
//                                             </FormControl>
//                                             <FormControl>
//                                                 <FormLabel style={formStyle} name="qualification" tabIndex="0" >Qualification</FormLabel>
//                                                 <RadioGroup style={{ display: "initial" }} value={qualification} onChange={(e) => { updateQualification(e.target.value); }} >
//                                                     <Radio value="10" label="10" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                     <Radio value="12" label="12" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                     <Radio value="graduation" label="graduation" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                     <Radio value="phd" label="phd" style={radio} control={<Radio />} tabIndex="0" aria-checked="false" />
//                                                 </RadioGroup>
//                                             </FormControl>
//                                             <TextField fullWidth type="file" style={formStyle} accept="image/png, image/jpeg" name='profile' ref={inputImage} onChange={() => { base64(); }} />
//                                         </form>

//                                     </Grid>

//                                 </Grid>

//                             </Box>

//                         </DialogContent>
//                         <DialogActions style={{ backgroundColor: "black", color: "white" }}>
//                             <Button variant="contained" style={{ backgroundColor: "#eeeeee", color: "black" }} onClick={CloseUp}>Cancel</Button>
//                             <Button variant="contained" style={{ backgroundColor: "#eeeeee", color: "black" }} onClick={handleClose}>Submit</Button>
//                         </DialogActions>
//                     </Dialog>
//                 </Box> : <PropagateLoader color='rgba(214, 54, 78, 1)' size="20" style={propagate} />}


//             </Box>




//         </>
//     );
// };

// export default Project;

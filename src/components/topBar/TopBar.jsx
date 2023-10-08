import React, { useState } from 'react'
import {
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import {
    AddIcon,
    HamBurgerIcon,
    HomeIcon,
    Settings,
    Logout,
    CloseIcon,
    LoginIcon,
} from '../icons/Icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PostModal from '../posts/PostModal'
import TopNav from './TopNav'
import { signInUserAnonymously } from '../../backend/auth'
import CommunityLogo from '../../assets/icons/logo.png'

const TopBar = ({ onClick, value }) => {
    const dispatch = useDispatch()
    const accessToken = useSelector((state) => state.auth?.accessToken?.token)
    const anonymous = useSelector((state) => state.auth?.accessToken?.anonymous)
    const imageURL = useSelector((state) => state.auth?.user?.photoURL)
    const categories = useSelector((state) => state?.categories?.categories)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleCategory = (category) => (event) => {
        event.preventDefault()
        dispatch({
            type: 'SET_CATEGORIES',
            payload: category,
        })
    }

    const handleAnonymousLogin = async () => {
        try {
            const res = await signInUserAnonymously()
            if (res.success === true) {
                dispatch({
                    type: 'SET_USER',
                    payload: {
                        displayName: res.user.displayName,
                        email: res.user.email,
                        photoURL: res.user.photoURL,
                        uid: res.user.uid,
                    },
                })

                dispatch({
                    type: 'SET_ACCESS_TOKEN',
                    payload: {
                        token: res.accessToken,
                        anonymous: res.anonymous,
                    },
                })
            } else {
                alert(res.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async () => {
        // Dispatch logout action
        dispatch({ type: 'CLEAR_USER' })

        // Remove token from local storage
        localStorage.removeItem('persist:root')

        // Handle anonymous login if necessary
        await handleAnonymousLogin()

        // Refresh the page to home page
        window.location.href = '/'
    }

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleCloseModal = () => setOpen(false)

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <button
                            onClick={onClick}
                            type="button"
                            className="inline-flex items-center p-2 sm:hidden"
                        >
                            {!value ? (
                                <HamBurgerIcon
                                    fill="orange"
                                    width="35"
                                    height="35"
                                />
                            ) : (
                                <CloseIcon
                                    fill="orange"
                                    width="35"
                                    height="35"
                                />
                            )}
                        </button>
                        <Link to="/" className="flex ml-2 md:mr-24">
                            <img
                                src={CommunityLogo}
                                alt="Community Box"
                                className="w-12 h-12 mt-2"
                            />
                            {window.innerWidth > 768 && (
                                <span className="self-center text-xl font-semibold pl-2 sm:text-2xl whitespace-nowrap dark:text-white">
                                    Community Box
                                </span>
                            )}
                        </Link>
                    </div>
                    {window.location.pathname === '/' ? (
                        <div className="hidden sm:inline-flex">
                            <TopNav
                                handleCategory={handleCategory}
                                categories={categories}
                            />
                        </div>
                    ) : null}
                    <div className="flex items-center">
                        <div className="flex items-center ml-3">
                            {accessToken && !anonymous && (
                                <Tooltip title="Add New Post">
                                    <button
                                        type="button"
                                        ref={null}
                                        onClick={handleOpen}
                                        className="mx-3"
                                    >
                                        <AddIcon
                                            fill="orange"
                                            width="36"
                                            height="36"
                                        />
                                    </button>
                                </Tooltip>
                            )}

                            <Avatar
                                onClick={handleClick}
                                className="cursor-pointer"
                                alt="Remy Sharp"
                                src={imageURL}
                            />

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {[
                                    <MenuItem onClick={handleClose} key="home">
                                        <ListItemIcon>
                                            <HomeIcon
                                                fill="none"
                                                width="24"
                                                height="24"
                                            />
                                        </ListItemIcon>
                                        <Link to="/">
                                            <ListItemText
                                                primary="Home"
                                                className="text-sm"
                                            />
                                        </Link>
                                    </MenuItem>,
                                    accessToken && !anonymous && (
                                        <MenuItem
                                            onClick={handleClose}
                                            key="settings"
                                        >
                                            <ListItemIcon>
                                                <Settings
                                                    fill="none"
                                                    width="24"
                                                    height="24"
                                                />
                                            </ListItemIcon>
                                            <Link to="/settings">
                                                <ListItemText
                                                    primary="Settings"
                                                    className="text-sm"
                                                />
                                            </Link>
                                        </MenuItem>
                                    ),
                                    anonymous && (
                                        <MenuItem
                                            key="login"
                                            onClick={() =>
                                                (window.location.href = '/auth')
                                            }
                                        >
                                            <ListItemIcon>
                                                <LoginIcon
                                                    fill="none"
                                                    width="24"
                                                    height="24"
                                                />
                                            </ListItemIcon>
                                            <ListItemText primary="Login" />
                                        </MenuItem>
                                    ),
                                    accessToken && !anonymous && (
                                        <MenuItem
                                            onClick={handleLogout}
                                            key="logout"
                                        >
                                            <ListItemIcon>
                                                <Logout
                                                    fill="none"
                                                    width="24"
                                                    height="24"
                                                />
                                            </ListItemIcon>
                                            <Link>
                                                <ListItemText
                                                    primary="Logout"
                                                    className="text-sm"
                                                />
                                            </Link>
                                        </MenuItem>
                                    ),
                                ].filter(Boolean)}
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
            <PostModal open={open} handleCloseModal={handleCloseModal} />
        </nav>
    )
}

export default TopBar

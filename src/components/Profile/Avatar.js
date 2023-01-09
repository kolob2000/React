import React, { useEffect, useState } from 'react'
import { Dialog } from '@mui/material'
import Crop from 'react-avatar-edit'
import style from './avatar.module.scss'
import { useProfilerSelector } from '../../app/features/Profiler/profilerSelectors'
import { storage } from '../../firebase'
import { ref } from 'firebase/storage'
import {
    onSnapshotProfiler,
    updateAvatarThunk,
} from '../../app/features/Profiler/middleware/middleware'

const Avatar = () => {
    const profiler = useProfilerSelector()
    const [open, setOpen] = useState(false)
    const [img, setImg] = useState(null)
    console.log('updated')
    const handleCrop = (preview) => {
        setImg(preview)
    }
    const handleFile = async () => {
        if (img) {
            const path = `/profile/${profiler.uid}${Date.now()}.png`
            const storageRef = ref(storage, path)
            await updateAvatarThunk(storageRef, img, profiler, path)
            setOpen((prev) => !prev)
        }
    }
    const handleClose = (e) => {
        setOpen((prev) => !prev)
    }
    return (
        <>
            <div
                className={style['photo-wrapper']}
                onClick={(e) => setOpen((prev) => !prev)}
            >
                <img
                    title="Выберите фото"
                    src={profiler.img}
                    alt=""
                    className={style['profile-photo']}
                />
            </div>
            <Dialog PaperProps={{ className: style.paper }} open={open}>
                <div className={style['avatar-wrap']}>
                    <Crop
                        borderStyle={{
                            textAlign: 'center',
                            border: 'none',
                        }}
                        labelStyle={{}}
                        label={'Выберите фотографию'}
                        width={500}
                        onCrop={handleCrop}
                        height={300}
                    />
                    <div className={style['buttons-wrap']}>
                        <button className={style.add} onClick={handleFile}>
                            Add
                        </button>
                        <button className={style.cancel} onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Avatar

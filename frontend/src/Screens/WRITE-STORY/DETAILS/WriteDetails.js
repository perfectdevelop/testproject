import React, { useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { writeStoryDetails } from '../../../Actions/storyActions'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


const WriteDetails = () => {
      

    const dispatch = useDispatch()
    const history = useHistory()

    const [title , setTitle] = useState('')
    const [genre , setGenre] = useState('')
    const [interestAge , setInterestAge] = useState('')
    const [language , setLanguage] = useState('')
    const [summary , setSummary] = useState('')

    const userLogin = useSelector(state =>state.userLogin)
    const { userInfo } = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(writeStoryDetails({
            
            title,
            genre,
            interestAge,
            language,
            summary,
        }))
        history.push('/write-story-content')
    }

    return (
        <div className = 'write-story-details'>



            <form className = 'write-story-details-form' 
            onSubmit = {submitHandler}
            >

                <div className = 'write-story-details-form-title'>
                    <label htmlFor = 'writeStoryDetailsFormTitle'>
                        Title
                    </label>
                    <input className = 'form-control' id = 'writeStoryDetailsFormTitle' type = 'text' placeholder = 'Title'
                    value = {title} onChange = {(e) => setTitle(e.target.value)} required
                    />
                    
                </div>
                        
                
                <div className = 'write-story-details-form-details'>
                    
                    <div className = 'write-story-details-form-genre'>
                        <label htmlFor = 'writeStoryDetailsFormGenre'>
                            Genre
                        </label>
                        <select className = 'form-control' id = 'writeStoryDetailsFormGenre'
                        value = {genre} onChange = {(e) => setGenre(e.target.value)} required
                        >
                            <option >Pick A Genre</option>
                            <option value = 'Drama'>Drama</option>
                            <option value = 'Action'>Action</option>

                        </select>
                    </div>
                    
                    <div className = 'write-story-details-form-interest-age'>
                        <label htmlFor = 'writeStoryDetailsForminterestAge'>
                            Intereset Age
                        </label>
                        <select className = 'form-control' id = 'writeStoryDetailsForminterestAge'
                        value = {interestAge} onChange = {(e) => setInterestAge(e.target.value)} required
                        >
                            <option value = ''>Intereset Age</option>
                            <option value = '3-6'>3-6</option>
                            <option value = '6-12'>6-12</option>

                        </select>
                    </div>
                    
                    <div className = 'write-story-details-form-language'>
                        <label htmlFor = 'writeStoryDetailsFormLanguage'>
                            Language
                        </label>
                        <select className = 'form-control' id = 'writeStoryDetailsFormLanguage' 
                        value = {language} onChange = {(e) => setLanguage(e.target.value)} required
                        >
                            <option value = ''>Language</option>

                            <option value = 'English'>English</option>
                            <option value = 'Persian'>Persian</option>

                        </select>
                    </div>
                    
                </div>

                <div className = 'write-story-details-form-summary'>
                    <label htmlFor = 'writeStoryDetailsFormSummary'>
                        Summary
                    </label>
                    <textarea className = 'form-control' id = 'writeStoryDetailsFormSummary' 
                    type = 'text' placeholder = 'Summary'
                    value = {summary} onChange = {(e) => setSummary(e.target.value)} required
                    />
                </div>
                

                <button className = 'btn btn-primary'>
                    Continue
                </button>
            
            </form>
        
        </div>
    )
}

export default WriteDetails

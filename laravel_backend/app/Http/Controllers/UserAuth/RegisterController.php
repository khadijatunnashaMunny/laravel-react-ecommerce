<?php

namespace App\Http\Controllers\UserAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RegData;

class RegisterController extends Controller
{
    //
    public function register(Request $req){
        $data=RegData::create([
            'fname'=> $req->fname,
            'lname'=> $req->lname,
            'email'=> $req->email,
            'phone'=> $req->phone,
            'password'=> $req->password,
            'cpassword'=> $req->cpassword,

        ]);

        return response()->json([
            "status"=>200,
            "username"=>$data->fname,
            "message"=>"registered successfully"
        ]);
       
       

    }
}

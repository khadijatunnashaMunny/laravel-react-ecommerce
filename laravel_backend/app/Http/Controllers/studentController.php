<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class studentController extends Controller
{
    //
    public function add_student(Request $request)
    {

        $student = new Student();
        $student->productId = $request->input('productId');
        $student->productName = $request->input('productName');
        $student->productDes = $request->input('productDes');
        $student->productPrice = $request->input('productPrice');
        $student->save();

        return response()->json([
            'status' => 200,
            'message' => "successfully added",

        ]);
    }
}

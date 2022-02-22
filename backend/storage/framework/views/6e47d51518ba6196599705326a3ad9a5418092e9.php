<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export to PDF</title>
</head>
<body>
    <table>
        <thead><tr>
            <th>Temporada</th>
            <th>Título</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalización</th>
            <th>Orquestación</th>
          
        </tr></thead>

    <tbody>
        <?php $__currentLoopData = $project; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $projects): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td><?php echo e($projects->seasons->NameSeason); ?></td>
            <td><?php echo e($projects->nameProject); ?></td>
            <td><?php echo e($projects->startDateProject); ?></td>
            <td><?php echo e($projects->endDateProject); ?></td>
            <td><?php echo e($projects->orchestrationProject); ?></td>

            
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tr>
    </tbody>
     
    </table>
</body>
</html><?php /**PATH C:\Users\Isaiah DAM TARDE\Desktop\OFGC app\AuditorioIonicLaravel\backend\resources\views/projects.blade.php ENDPATH**/ ?>